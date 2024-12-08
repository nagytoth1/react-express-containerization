#!/bin/sh
echo "@entrypoint.sh: Hosting frontend via Nginx..."
nginx -g 'daemon off;' &
echo "@entrypoint.sh: Launching Express backend..."
node server.js