# # #!/bin/sh
# # set -e

# # cd /var/www/html

# # # Create SQLite DB if missing
# # touch /var/www/html/database/database.sqlite

# # # Run artisan commands with real env vars
# # php artisan config:clear
# # php artisan cache:clear
# # php artisan migrate --force
# # php artisan config:cache
# # php artisan route:cache
# # php artisan view:cache
# # php artisan storage:link

# # # Start the server
# # exec /init
# #!/bin/sh
# set -e

# cd /var/www/html

# # Create SQLite DB if missing
# touch /var/www/html/database/database.sqlite
# chown www-data:www-data /var/www/html/database/database.sqlite

# # Run Laravel setup
# php artisan config:clear
# php artisan cache:clear
# php artisan migrate --force
# php artisan config:cache
# php artisan route:cache
# php artisan view:cache
# php artisan storage:link

# echo "Laravel setup complete"
#!/bin/sh
set -e

echo "🚀 Starting Laravel setup..."

cd /var/www/html

# Ensure SQLite database exists
touch database/database.sqlite
chown -R www-data:www-data database/

# Run migrations and optimizations
php artisan migrate --force
php artisan optimize:clear

echo "✅ Laravel setup complete"