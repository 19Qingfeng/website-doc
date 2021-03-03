# 启用 Keep Alive

## keep Alive

### 简介

`Http Keep Alive` 它的作用是对于`http`请求的`tcp`链接进行复用。也就是说当首次请求和服务器进行 TCP 链接之后，接下里的所有请求就不需要额外的重复进行 TCP 链接了。

> Http1.1 开始后，`Keep Alive`成为了默认配置，默认进行开启。

![截屏2021-03-02 下午10.20.30.png](https://i.loli.net/2021/03/02/HLxjoVrE3WMeIwO.png)

瀑布图中的`Initial connection`就是进行`TCP`链接的过程。

之后同一台服务器下的请求，就没有`Initial connection`这个过程了。实际上它进行`keep alive`启到的作用，对同一台服务器下的请求进行`tcp`链接的复用。

![截屏2021-03-02 下午10.23.33.png](https://i.loli.net/2021/03/02/H9PVNjZ2w5KFitA.png)

> `initial connection`是和服务器建立链接的时间，而`TTFB`是服务器收到请求后服务器处理请求(比如数据库查找，代码执行)所消耗的时间，不要混淆。

### 开启

![1.jpg](https://i.loli.net/2021/03/02/kwhceyGiRX6lCMu.jpg)

检查是否开启`keep alive`非常简单，检查响应头中是否存在`Connection: keep-alive`。存在即是开启了`keep alive`。

查看`response header`有很多种方法，可以从浏览器来看也可以使用`cur`来看，比如：
`cur -v [url]`就可以看到详细的请求返回信息。

### 参数

和`keep alive`相关的还有两个基于 nginx 重要的参数，这两个参数通常根据网站实际的请求量进行灵活配置。

#### keepalive_timeout

**`keepalive_timeout`表示超时时间**，当客户端和服务端建立起来`TCP`链接之后，使用`keepalive`保持了链接。但是如果一直不使用的话那么就需要超时关掉的，nginx 中默认被注释的是 0 表示不启用`keep Alive`等于每一个链接都需要单独重新建立`TCP`链接。

可以根据项目进行设置比如`keepalive_timeout: 65;` 表示 65s 下如果没有使用`TCP`链接了那么就会断开关闭它。

#### keepalive_request

`keepalive_request 100;`

这个值的意思是说，当客户端和服务端建立起来一个`TCP`链接之后它会建立一个计数器，也就是**利用当前已经建立的`TCP`链接一共可以发送多少个请求。**

比如上边的 100 表示，当建立起来`TCP`链接之后，100 个请求以内的都可以复用这个`TCP`链接，而到 101 的请求之后就得重新建立一个新的`TCP`链接了。

::: tip
至于为什么要设置`timeout`和`request`，虽然`keepalive`的确好用，但是同样要考虑服务器的开销。每个用户都和服务器建立起一个`TCP`链接，如果用户规模非常大，那么服务器上和每个用户都得保持`TCP`链接，这样的开销也非常大。

当然这两个参数是根据项目详情进行配置的，比如淘宝网，淘宝一个首页加载远远超过 100 个请求数量，那么此时在配置 100 那么就明显是不合适的了。
:::

### Demo

```

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65; # 秒单位

    keepalive_request 1000; # keepAlive 建立保持链接数量 超过则断开重新建立

    gzip  on; # 启动gzip

    gzip_min_length 1k; # 对大于1K的文件才进行Gzip压缩

    gzip_comp_level 6; # 压缩比率 1-9 越高压缩越小 但是对cpu消耗越高

    # 开启gzip压缩文件类型
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/xml text/javascript application/json;

    gzip_static on; # 对于已经gzip压缩过的进行直接利用

    gzip_vary on; # 它会在响应头部添加gzip的属性 以及告诉客户端启用了Gzip压缩

    gzip_buffers 4 16k; # 优化压缩过程

    gzip_http_version 1.1; # 压缩使用的http版本


    server {
        listen       8666;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   /Users/wanghaoyu/coder/nginx;
            index  index.html index.htm;
            # try_files $uri $uri/ /index.html;
        }

        location /v1 {
            proxy_pass  http://lemon-chat.boochat.cn;
            # try_files $uri $uri/ /index.html;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}
    include servers/*;
}

```
