#!/bin/sh
set -e

cd /var/www/html

# Create SQLite DB if missing
touch /var/www/html/database/database.sqlite

# Run artisan commands with real env vars
php artisan config:clear
php artisan cache:clear
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan storage:link

# Start the server
exec /init