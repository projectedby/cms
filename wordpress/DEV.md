### WORDPRESS DOCKER IMAGE

https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-ubuntu-18-04
https://grigorkh.medium.com/fix-tzdata-hangs-docker-image-build-cdb52cc3360d

### DOCKER BUILD

```sh
docker build -t novemberizing/wordpress:0.0.1 -t novemberizing/wordpress:latest .
```

```sh
docker run -itd --rm -p 8080:80 -v wp-content:/var/www/html/wp-content --name wordpress novemberizing/wordpress
```

```sh
docker cp [container id]:/var/www/html/wp-config.php ./
```

```sh
docker stop wordpress
docker run -itd --rm -p 8080:80 -v wp-content:/var/www/html/wp-content -v .\wp-config.php:/var/www/html/wp-config.php --name wordpress novemberizing/wordpress
```

https://stackoverflow.com/questions/22541333/have-nginx-access-log-and-error-log-log-to-stdout-and-stderr-of-master-process
