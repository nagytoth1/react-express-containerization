#!/bin/sh
nginx -g 'daemon off;' & 
node server.js