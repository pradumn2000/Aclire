FROM richarvey/nginx-php-fpm:2.2.0

ENV WEBROOT /var/www/html/public
ENV APP_ENV production
ENV APP_DEBUG false
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1
ENV COMPOSER_ALLOW_SUPERUSER 1

# Copy project files
COPY . /var/www/html

# Install Node.js
RUN apk add --no-cache npm

# Install dependencies + build
RUN composer install --no-dev --optimize-autoloader
RUN npm ci --ignore-scripts && npm run build

# Laravel cache
RUN php artisan config:cache
RUN php artisan route:cache
RUN php artisan view:cache

# Create storage directory for SQLite
RUN mkdir -p /var/www/html/storage
RUN php artisan storage:link

# Permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
RUN chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

CMD ["/start.sh"]