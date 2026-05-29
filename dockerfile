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

# FROM serversideup/php:8.4-fpm-nginx-alpine

# ENV APP_ENV=production
# ENV APP_DEBUG=false
# ENV COMPOSER_ALLOW_SUPERUSER=1
# ENV COMPOSER_MEMORY_LIMIT=-1

# USER root

# COPY --chown=www-data:www-data . /var/www/html

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

# RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist

# RUN npm ci --ignore-scripts && npm run build

# RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
#     && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# COPY start.sh /start.sh
# RUN chmod +x /start.sh

# USER www-data

# CMD ["/start.sh"]

# FROM serversideup/php:8.4-fpm-nginx-alpine

# ENV APP_ENV=production
# ENV APP_DEBUG=false
# ENV COMPOSER_ALLOW_SUPERUSER=1
# ENV COMPOSER_MEMORY_LIMIT=-1

# USER root

# COPY --chown=www-data:www-data . /var/www/html

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

# RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist

# RUN npm ci --ignore-scripts && npm run build

# RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
#     && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# # Place startup script in serversideup's hook directory — runs before nginx starts
# COPY start.sh /etc/entrypoint.d/99-laravel-setup.sh
# RUN chmod +x /etc/entrypoint.d/99-laravel-setup.sh

# # Do NOT override CMD — let the image's /init handle nginx
# FROM serversideup/php:8.4-fpm-nginx-alpine

# ENV APP_ENV=production
# ENV APP_DEBUG=false
# ENV COMPOSER_ALLOW_SUPERUSER=1
# ENV COMPOSER_MEMORY_LIMIT=-1

# USER root

# COPY --chown=www-data:www-data . /var/www/html

# WORKDIR /var/www/html

# RUN apk add --no-cache npm

# RUN install-php-extensions \
#     zip pdo pdo_sqlite mbstring exif pcntl bcmath gd intl

# # Composer + Frontend Build
# RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist
# RUN npm ci --ignore-scripts && npm run build

# # Laravel cache
# RUN php artisan config:cache \
#     && php artisan route:cache \
#     && php artisan view:cache \
#     && php artisan storage:link

# # Permissions
# RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
#     && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# # Startup script
# COPY start.sh /etc/entrypoint.d/99-laravel-setup.sh
# RUN chmod +x /etc/entrypoint.d/99-laravel-setup.sh
FROM serversideup/php:8.4-fpm-nginx-alpine

ENV APP_ENV=production
ENV APP_DEBUG=false
ENV COMPOSER_ALLOW_SUPERUSER=1
ENV COMPOSER_MEMORY_LIMIT=-1

USER root

# Copy application
COPY --chown=www-data:www-data . /var/www/html

WORKDIR /var/www/html

# Install Node.js and required packages
RUN apk add --no-cache \
    nodejs \
    npm

# Install PHP extensions
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

# Install Composer dependencies
RUN composer install \
    --no-dev \
    --optimize-autoloader \
    --no-interaction \
    --prefer-dist

# Install Node dependencies and build Vite assets
RUN npm ci
RUN npm run build

# Debug build output
RUN echo "===== VITE BUILD OUTPUT =====" \
    && ls -la public \
    && ls -la public/build || true \
    && find public -name manifest.json || true

# Fail build if manifest does not exist
RUN test -f public/build/manifest.json

# Create SQLite database
RUN mkdir -p database \
    && touch database/database.sqlite \
    && chown -R www-data:www-data database

# Laravel optimization
RUN php artisan optimize:clear \
    && php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

# Storage link (ignore if already exists)
RUN php artisan storage:link || true

# Permissions
RUN chown -R www-data:www-data storage bootstrap/cache database \
    && chmod -R 775 storage bootstrap/cache database

# Startup script
COPY start.sh /etc/entrypoint.d/99-laravel-setup.sh
RUN chmod +x /etc/entrypoint.d/99-laravel-setup.sh

# Switch back to application user
USER www-data