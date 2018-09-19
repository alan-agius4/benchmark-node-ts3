#!/bin/bash

setup_and_benchmark() {
    rm -rf node_modules
    npm i --loglevel error --no-audit --no-package-lock
    npm list typescript
    npm run build-clean
    node_modules/.bin/benchmark -- npm run build-clean
}


echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 3, Angular 6 & Angular CLI 7"
echo "-----------------------------------------------------------"
cp package-ng-7-ts-3-0-cli-7-1.json package.json
setup_and_benchmark

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 3, Angular 7.beta.4 & Angular CLI 7"
echo "-----------------------------------------------------------"
cp package-ng-7-ts-3-0-cli-7-2.json package.json
setup_and_benchmark

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 3, Angular 6 & Angular CLI 7"
echo "-----------------------------------------------------------"
cp package-ng-7-ts-3-0-cli-7-1.json package.json
setup_and_benchmark

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 3, Angular 7.beta.4 & Angular CLI 7"
echo "-----------------------------------------------------------"
cp package-ng-7-ts-3-0-cli-7-2.json package.json
setup_and_benchmark

