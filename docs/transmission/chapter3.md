# HTTP 资源缓存


> [HTTP 缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching)本质上就是为了提高资源重复访问的速度。

|              | **获取资源形式** | **状态码**          | **发送请求到服务器**                       |
| ------------ | ---------------- | ------------------- | ------------------------------------------ |
| **强缓存**   | 从缓存取         | 200（from cache）   | 否，直接从缓存取                           |
| **协商缓存** | 从缓存取         | 304（not modified） | 是，正如其名，通过服务器来告知缓存是否可用 |

## Cache-Control/Expire

Cache-Control 叫做强缓存。

> 浏览器在请求某一资源时，会先获取该资源缓存的 header 信息，判断是否命中强缓存（cache-control 和 expires 信息），若命中直接从缓存中获取资源信息，包括缓存 header 信息；本次请求根本就不会与服务器进行通信。

### 强缓存相关 header 字段

- expires，这是 http1.0 时的规范；它的值为一个绝对时间的 GMT 格式的时间字符串，如 Mon, 10 Jun 2015 21:31:12 GMT，如果发送请求的时间在 expires 之前，那么本地缓存始终有效，否则就会发送请求到服务器来获取资源

* cache-control：max-age=number，这是 http1.1 时出现的 header 信息，主要是利用该字段的 max-age 值来进行判断，它是一个相对值；资源第一次的请求时间和 Cache-Control 设定的有效期，计算出一个资源过期时间，再拿这个过期时间跟当前的请求时间比较，如果请求时间在过期时间之前，就能命中缓存，否则就不行；cache-control 除了该字段外，还有下面几个比较常用的设置值：

  - no-cache：不使用本地缓存。需要使用缓存协商，先与服务器确认返回的响应是否被更改，如果之前的响应中存在 ETag，那么请求的时候会与服务端验证，如果资源未被更改，则可以避免重新下载。

  * no-store：直接禁止游览器缓存数据，每次用户请求该资源，都会向服务器发送一个请求，每次都会下载完整的资源。

  * public：可以被所有的用户缓存，包括终端用户和 CDN 等中间代理服务器(service worker缓存)。

  * private：只能被终端用户的浏览器缓存，不允许 CDN 等中继缓存服务器对其缓存。

> 注意：如果 cache-control 与 expires 同时存在的话，cache-control 的优先级高于 expires

> Cache-Control:max-age=0(0 秒后缓存失效);设置成为 0 就表示第一次获取之后下一次缓存立即失效了，其实就和 no-cache 差不多的效果。

> Cache-Control:no-store;表示不使用缓存，直接向后台发送请求获取资源（强缓存和协商缓存都不会走）。

::: tip
当当前资源没有命中强缓存的时候，此时就会去命中协商缓存。但是当使用`no-store`就会直接重新下载并不去会尝试查看是否命中协商缓存。
:::

## Last-Modified + If-Modified-Since

二者的值都是 GMT 格式的时间字符串，具体过程：

- 浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，在 respone 的 header 加上 Last-Modified 的 header，这个 header 表示这个资源在服务器上的最后修改时间

- 浏览器再次跟服务器请求这个资源时，在 request 的 header 上加上 If-Modified-Since 的 header，这个 header 的值就是上一次请求时返回的 Last-Modified 的值

- 服务器再次收到资源请求时，根据浏览器传过来 If-Modified-Since 和资源在服务器上的最后修改时间判断资源是否有变化，如果没有变化则返回 304 Not Modified，但是不会返回资源内容；如果有变化，就正常返回资源内容。当服务器返回 304 Not Modified 的响应时，response header 中不会再添加 Last-Modified 的 header，因为既然资源没有变化，那么 Last-Modified 也就不会改变，这是服务器返回 304 时的 response header

- 浏览器收到 304 的响应后，就会从缓存中加载资源

- 如果协商缓存没有命中，浏览器直接从服务器加载资源时，Last-Modified 的 Header 在重新加载的时候会被更新，下次请求时，If-Modified-Since 会启用上次返回的 Last-Modified 值

## E-Tag + If-None-Match

这两个值是由服务器生成的每个资源的唯一标识字符串，只要资源有变化就这个值就会改变；其判断过程与 Last-Modified/If-Modified-Since 类似，与 Last-Modified 不一样的是，当服务器返回 304 Not Modified 的响应时，由于 ETag 重新生成过，response header 中还会把这个 ETag 返回，即使这个 ETag 跟之前的没有变化。

::: tip

关于`E-Tag`和`Last-Modified`区别有很多文章介绍了，这里就不做简介了。

同时出现时，`Etag`优先级会高于`Last-Modified`。

默认`nginx`开启`Etag`和`Last-Modified`这两个缓存策略。
:::

## Nginx 配置

### html

```
 # 缓存配置
            if($request_filename ~* .*\.(?:htm|html)$)
            {
                add_header Cache-Control "no-cache,must-revalidate";
                add_header "Pragma" "no-cache";
                add_header "Expires" "0";
            }
```

关于有关 html 文件的请求，一般我们都不希望`html`缓存。因为传统单页面前端应用，当`html`发生改变的时候我们都是希望它可以及时更新，(否则 html 缓存住了使用的旧的资源路径就展示的还是旧的页面)。

所以给`html`文件添加了`cache_control:no-cache`，**让`html`直接走协商缓存，如果文件内容不发生改变那么就继续使用缓存，如果变化了(基于 webpack，html 中引用的 js，css 资源修改后文件名都会存在唯一的 hash，html 引用就会发生改变)，那么就无法命中协商缓存从而重新请求。**

`Pragma` 和 `Expires:0`(立即过期)，都是对`cache-control`的兼容，他们都是告诉浏览器。每次需要`html`文件的时候，不需要浏览器缓存而是重新去服务端进行重新获取和验证(协商缓存)。

### JS&CSS

```
if($request_filename ~* .*\.(?:js|css)$)
            {
                expires 7d; # js css 文件7天过期时间 强缓存
            }
```

这里的意思是说对于`css`和`js`文件服务器告诉浏览器，强制缓存 7 天的时间。当然这个时间可以跟随项目实际情况进行设置。

> 其实这里的 css 和 js 的过期时间不设置也可以，因为现代 web 应用中如果 html 改变，伴随的`css`和`js`都会因为修改造成`webpack`打包后生成文件的`contenthash`改变(文件名改变)。那么网站上 html 引入的资源路径都变化了，给用户的一定是会最新的 html 指向的新文件 css 和 js 文件。

### 图片/视频

```
 if ($request_filename ~* .*\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm)$)

              {

                 expires      7d;

              }
```

对于图片/视频资源，一般来说可以设置一个比较长的时间让浏览器去进行强缓存。因为视频/图片/字体资源一般都不会怎么变化，所以设置一个较长的缓存时间会加快访问速度的。

## Nginx-Demo

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

        listen       843 ssl http2;

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
