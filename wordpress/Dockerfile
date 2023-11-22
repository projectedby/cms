FROM ubuntu
ENV TZ=Asia/Seoul
RUN apt update;                                         \
    apt -y upgrade;                                     \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime;     \
    echo $TZ > /etc/timezone;                           \
    apt install -y tzdata;                              \
    apt install -y nginx;                               \
    apt install -y php-fpm php-mysql
EXPOSE 80
COPY default.conf /etc/nginx/sites-available/default
COPY wordpress /var/www/html/
RUN chown www-data:www-data -R /var/www/html
WORKDIR /etc/nginx
CMD ["/bin/bash", "-c", "php-fpm8.1 && chmod 777 /var/run/php/php8.1-fpm.sock && chown www-data:www-data -R /var/www/html && nginx -g 'daemon off;'"]
