# Use the official Nginx image as base
FROM nginx:latest

# Copy the NGINX configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the frontend code into the NGINX html directory
COPY index.html /usr/share/nginx/html/index.html
