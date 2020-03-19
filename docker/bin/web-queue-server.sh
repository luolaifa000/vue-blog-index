#!/bin/bash

echo "run web-queue-server.sh"

source /etc/profile

cd /home/user00/web
#yarn install
#yarn build

nginx -g "daemon off;"
