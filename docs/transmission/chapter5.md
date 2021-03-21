# HTTP2

## HTTP2 优势

### 二进制传输

帧是数据传输的最小单位，以二进制传输代替原本的明文传输，原本的报文消息被划分为更小的数据帧。

### 多路复用

#### 概念

HTTP1.1，在 keep-alive 中，必须等下上一个请求接受才能发起下一个请求，所以会收到前面请求的阻塞。

使用 pipe-line 可以连续发送一组没有相互依赖的请求而不比等到上一个请求先结束，看似 pipe-line 是个好东西，但是到目前为止我还没见过这种类型的连接，也间接说明这东西比较鸡肋。pipe-line 依然没有解决阻塞的问题，因为请求响应的顺序必须和请求发送的顺序一致，如果中间有某个响应花了很长的时间，后面的响应就算已经完成了也要排队等阻塞的请求返回，这就是线头阻塞。

http2 的多路复用就很好的解决了上面所提出的问题。**http2 的传输是基于二进制帧的。每一个 TCP 连接中承载了多个双向流通的流，每一个流都有一个独一无二的标识和优先级，而流就是由二进制帧组成的。二进制帧的头部信息会标识自己属于哪一个流，所以这些帧是可以交错传输，然后在接收端通过帧头的信息组装成完整的数据。这样就解决了线头阻塞的问题，同时也提高了网络速度的利用率。**

::: tip
http2 只能跑在 https 协议下。
:::

#### 生成自签名 HTTPS 证书

`openssl genrsa -des3 -passout pass:x -out server.pass.key 2048`

`openssl rsa -passin pass:x -in server.pass.key -out server.key`

`openssl req -new -key server.key -out server.csr`

`openssl x509 -req -sha256 -days 3650 -in server.csr -signkey server.key -out server.crt`

根据上述四条命令生成自签发的 SSL 证书。

然后在 nginx 中进行配置生成的证书地址就可以了

```
        # 开启HTTPS
        ssl on;

        ssl_certificate      /Users/wanghaoyu/coder/crt/server.crt;
        ssl_certificate_key  /Users/wanghaoyu/coder/crt/server.key;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;
```

#### Nginx 配置

- Server Push

* http 2

* 多路复用(默认)

## Nginx 前端配置

```
    #keepalive_timeout  0;

    keepalive_timeout  65;

    keepalive_requests 100;



    gzip on;



    gzip_min_length 1k;



    gzip_comp_level 6;



    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/xml text/javascript application/json;



    gzip_static on;



    gzip_vary on;



    gzip_buffers 4 16k;



   gzip_http_version 1.1;



server {

        listen       8080;

        server_name  localhost;



        #charset koi8-r;



        #access_log  logs/host.access.log  main;



        location / {

            root   /Users/your_username/foldername;

            index  index.html index.htm;

            try_files $uri /index.html;

            if ($request_filename ~* .*\.(?:htm|html)$)

              {

                add_header Cache-Control "no-cache, must-revalidate";

                add_header "Pragma" "no-cache";

                add_header "Expires" "0";

              }

             if ($request_filename ~* .*\.(?:js|css)$)

              {

                expires      7d;

              }

             if ($request_filename ~* .*\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm)$)

              {

                 expires      7d;

              }

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









# HTTPS server

    #

    server {

        listen       443 ssl http2;

        server_name  localhost;



        ssl on;



        ssl_certificate      /Users/your_username/foldername/ssl/server.crt;

        ssl_certificate_key  /Users/your_username/foldername/ssl/server.key;



        ssl_session_cache    shared:SSL:1m;

        ssl_session_timeout  5m;



        ssl_ciphers  HIGH:!aNULL:!MD5;

        ssl_prefer_server_ciphers  on;



        location / {

            root   /Users/your_username/foldername;

            index  index.html index.htm;

            try_files $uri /index.html;

            http2_push /img/me0.jpg;

            http2_push /img/me1.jpg;

            http2_push /img/me2.jpg;

        }

    }


```
