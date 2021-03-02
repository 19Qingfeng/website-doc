# 启用压缩 GZIP

> gzip,传输层进行的动态压缩。

首先来安装`nginx`,推荐使用`brew`来管理安装。

安装 nginx
`brew install nginx`

运行文件地址
`sudo brew services start nginx`
同理`restart nginx`等等

nginx 配置文件地址
`vim /usr/local/etc/nginx/nginx.conf`


## nginx配置


``` json
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
    keepalive_timeout  65;

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

...
```

::: tip
传输`nginx`开启`gzip`可以达到压缩百分之90，同时需要注意`gzip`配置有一些坑需要仔细细心。
:::
