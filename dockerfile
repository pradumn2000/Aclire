FROM richarvey/nginx-php-fpm:3.1.6

ENV WEBROOT /var/www/html/public
ENV APP_ENV production
ENV APP_DEBUG false
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1
ENV COMPOSER_ALLOW_SUPERUSER 1

# Copy project
COPY . /var/www/html

# Install Node.js (for Vite build)
RUN apk add --no-cache npm

# Install dependencies and build frontend
RUN composer install --no-dev --optimize-autoloader
RUN npm ci --ignore-scripts && npm run build

# Laravel optimizations
RUN php artisan config:cache
RUN php artisan route:cache
RUN php artisan view:cache
RUN php artisan storage:link

# Create SQLite directory
RUN mkdir -p /var/www/html/storage

# Permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
RUN chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

CMD ["/start.sh"]