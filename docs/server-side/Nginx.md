# Nginx

## 配置server

```nginx

http {
    server {
        listen 443 ssl;
        server_name lingfenglong.xyz;
        
        # ssl证书
        ssl_certificate /etc/nginx/certificate/lingfenglong.xyz.pem;
        ssl_certificate_key /etc/nginx/certificate/lingfenglong.xyz.key;
        
        location / {
            root  /usr/share/nginx/html;
            index index.html index.htm;
        }
    }
}

```

## 重写Url

```nginx

http {
    server {
        listen 80;
        server_name lingfenglong.xyz;
        
        location / {
            rewrite ^(.*)$ https://lingfenglong.xyz$1 permanent;
        }
    }
}

```