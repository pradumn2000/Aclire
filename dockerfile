# FROM serversideup/php:8.4-fpm-nginx-alpine

# ENV APP_ENV=production
# ENV APP_DEBUG=false
# ENV COMPOSER_ALLOW_SUPERUSER=1
# ENV COMPOSER_MEMORY_LIMIT=-1

# # Switch to root for system-level setup
# USER root

# # Copy project files
# COPY --chown=www-data:www-data . /var/www/html

# # Install system packages
# RUN apk add --no-cache \
#     npm \
#     libzip-dev \
#     sqlite-dev \
#     curl \
#     git \
#     libpng-dev \
#     libxml2-dev \
#     oniguruma-dev \
#     icu-dev

# # Install PHP extensions
# RUN install-php-extensions \
#     zip \
#     pdo \
#     pdo_sqlite \
#     mbstring \
#     exif \
#     pcntl \
#     bcmath \
#     gd \
#     intl

# WORKDIR /var/www/html

# # Install Composer dependencies
# RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist

# # Build frontend assets
# RUN npm ci --ignore-scripts && npm run build


# # Create SQLite database file if it doesn't exist
# RUN touch /var/www/html/database/database.sqlite \
#     && chown www-data:www-data /var/www/html/database/database.sqlite

# # Laravel optimizations
# RUN php artisan config:clear \
#     && php artisan cache:clear \
#     && php artisan migrate --force \
#     && php artisan config:cache \
#     && php artisan route:cache \
#     && php artisan view:cache \
#     && php artisan storage:link

# # Laravel optimizations
# RUN php artisan config:cache \
#     && php artisan route:cache \
#     && php artisan view:cache \
#     && php artisan storage:link

# # Set permissions
# RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
#     && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# # Switch back to non-root user for runtime
# USER www-data

FROM serversideup/php:8.4-fpm-nginx-alpine

ENV APP_ENV=production
ENV APP_DEBUG=false
ENV COMPOSER_ALLOW_SUPERUSER=1
ENV COMPOSER_MEMORY_LIMIT=-1

USER root

COPY --chown=www-data:www-data . /var/www/html

RUN apk add --no-cache \
    npm \
    libzip-dev \
    sqlite-dev \
    curl \
    git \
    libpng-dev \
    libxml2-dev \
    oniguruma-dev \
    icu-dev

RUN install-php-extensions \
    zip \
    pdo \
    pdo_sqlite \
    mbstring \
    exif \
    pcntl \
    bcmath \
    gd \
    intl

WORKDIR /var/www/html

RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist

RUN npm ci --ignore-scripts && npm run build

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

COPY start.sh /start.sh
RUN chmod +x /start.sh

USER www-data

CMD ["/start.sh"]