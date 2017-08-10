#!/usr/bin/env bash

# To root directory
cd ..

# Archive necessary files
tar -cvzf server.tar.gz .gitignore app.js LICENSE package.json README.md yarn.lock

# Secure-copy to server
scp server.tar.gz zoho@mattzo.life:~/PROJECTS/zohoMatt
rm server.tar.gz

# In the server
ssh zoho@mattzo.life << 'ENDSSH'
pm2 stop all

cd ~/PROJECTS/zohoMatt
rm -rf server
mkdir server
cd server
tar -xvf ../server.tar.gz
yarn install
pm2 start all
ENDSSH