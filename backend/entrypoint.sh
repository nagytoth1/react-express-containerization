#!/bin/sh
echo "@entrypoint.sh: Hosting frontend via Nginx..."
# if directory is missing create it, without error
mkdir -p /var/lib/nginx/tmp/ 
nginx -g 'daemon off;' &
echo "@entrypoint.sh: Launching Express backend..."
node server.js