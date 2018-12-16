#!/usr/bin/env bash

GREEN='\033[0;32m'
NC='\033[0m'

echo "${GREEN}==================${NC}"
echo "${GREEN}Starting Build... ${NC}"
echo "${GREEN}==================${NC}"

echo "${GREEN}Running React Build...${NC}"
npm run build:react

echo "${GREEN} React build finished successfully deploying to GH Pages"
rm -rf ./docs/
cp -R ./build ./docs
cp ./public/favicon.ico ./docs/

chmod -R 777 ./docs/

echo "${GREEN}Running Unit Tests...${NC}"
npm test

echo "${GREEN}Done!${NC}"
