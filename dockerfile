FROM richarvey/nginx-php-fpm:3.1.6

ENV WEBROOT /var/www/html/public
ENV APP_ENV=production
ENV APP_DEBUG=false
ENV PHP_ERRORS_STDERR=1
ENV RUN_SCRIPTS=1
ENV REAL_IP_HEADER=1
ENV COMPOSER_ALLOW_SUPERUSER=1
ENV COMPOSER_MEMORY_LIMIT=-1

# Copy project files
COPY . /var/www/html

# Install system dependencies + Node.js
RUN apk add --no-cache \
    npm \
    libzip-dev \
    sqlite-dev \
    curl \
    git \
    libpng-dev \
    libxml2-dev \
    oniguruma-dev

# Install PHP extensions required by Laravel
RUN docker-php-ext-install \
    zip \
    pdo \
    pdo_sqlite \
    mbstring \
    exif \
    pcntl \
    bcmath

# Composer install with more output
RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist --verbose

# Build React frontend
RUN npm ci --ignore-scripts && npm run build

# Laravel optimizations
RUN php artisan config:cache
RUN php artisan route:cache
RUN php artisan view:cache
RUN php artisan storage:link

# Permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
RUN chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

CMD ["/start.sh"]