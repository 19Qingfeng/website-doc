(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{407:function(t,s,n){"use strict";n.r(s);var a=n(42),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"nginx-配置-dockerfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置-dockerfile"}},[t._v("#")]),t._v(" nginx 配置 Dockerfile")]),t._v(" "),n("h2",{attrs:{id:"nginx-配置-options-跨域请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置-options-跨域请求"}},[t._v("#")]),t._v(" Nginx 配置 options 跨域请求")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("对于复杂请求 NGINX 上需要额外配置 options 处理")])]),t._v(" "),n("li",[n("p",[t._v("对于请求中虽然配置了"),n("code",[t._v("Access-Control-allow-origin:*")]),t._v("但是仍然不行。")])])]),t._v(" "),n("p",[t._v("此时一定要注意看报错信息，跨域错误信息。\n因为跨域出了域名不允许，还有方式，还有请求表头跨域拒绝。。一系列拒绝问题，所以还有许多"),n("code",[t._v("nginx")]),t._v("中配置的头的跨域问题。")]),t._v(" "),n("p",[t._v("比如提示报错"),n("code",[t._v("Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response.")]),t._v("此时跨域被拒绝，是因为请求头中"),n("code",[t._v("Content-Type")]),t._v("需要跨域请求配置允许的方式。")]),t._v(" "),n("div",{staticClass:"language-nginx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置是否允许 cookie 传输")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Access"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Allow")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Credentials "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许请求地址跨域 * 做为通配符")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Access"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Allow")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Origin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许跨域的请求方法")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Access"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Allow")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Methods "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET, POST, PUT, DELETE, OPTIONS'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请求头")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Access"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Allow")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Headers "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_method")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OPTIONS'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("204")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"docker-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-配置"}},[t._v("#")]),t._v(" docker 配置")]),t._v(" "),n("div",{staticClass:"language-dockerfile extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build stage")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("12 as build"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("stage\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /app\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" package*.json ./\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm i\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" . .\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm run build"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("prod\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# production stage")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("stable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine as production"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("stage\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("from=build"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("stage /app/dist /usr/share/nginx/html\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("from=build"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("stage /app/dist /etc/nginx/html\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" ./nginx.conf /etc/nginx/nginx.conf\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 80\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nginx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-g"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"daemon off;"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("div",{staticClass:"language-nginx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#user  nobody;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("worker_processes")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_log  logs/error.log;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_log  logs/error.log  notice;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_log  logs/error.log  info;")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pid        logs/nginx.pid;")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("events")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("worker_connections")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),t._v("       mime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("types")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default_type")]),t._v("  application"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("octet"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#                  '$status $body_bytes_sent \"$http_referer\" '")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#                  \'"$http_user_agent" "$http_x_forwarded_for"\';')]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#access_log  logs/access.log  main;")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sendfile")]),t._v("        on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#tcp_nopush     on;")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#keepalive_timeout  0;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keepalive_timeout")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gzip  on;")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v("  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#charset koi8-r;")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#access_log  logs/host.access.log  main;")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("   html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_page  404              /404.html;")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# redirect server error pages to the static page /50x.html")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("error_page")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("   html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy the PHP scripts to Apache listening on 127.0.0.1:80")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ \\.php$ {")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    proxy_pass   http://127.0.0.1;")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ \\.php$ {")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    root           html;")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_pass   127.0.0.1:9000;")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_index  index.php;")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    include        fastcgi_params;")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# deny access to .htaccess files, if Apache's document root")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# concurs with nginx's one")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ /\\.ht {")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    deny  all;")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# another virtual host using mix of IP-, name-, and port-based configuration")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#server {")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    listen       8000;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    listen       somename:8080;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    server_name  somename  alias  another.alias;")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    location / {")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        root   html;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        index  index.html index.htm;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    }")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTPS server")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#server {")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    listen       443 ssl;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    server_name  localhost;")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_certificate      cert.pem;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_certificate_key  cert.key;")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_session_cache    shared:SSL:1m;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_session_timeout  5m;")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_ciphers  HIGH:!aNULL:!MD5;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_prefer_server_ciphers  on;")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    location / {")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        root   html;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        index  index.html index.htm;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    }")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);