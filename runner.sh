#!/bin/bash

setup_and_benchmark() {
    rm -rf node_modules/@angular node_modules/typescript node_modules/@angular-devkit node_modules/@ngtools/webpack node_modules/rxjs
    npm i --loglevel error --no-audit --no-package-lock
    node_modules/.bin/benchmark -- npm run build -- --prod
}

npm i --no-package-lock

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 2.9.2 and Angular 6, Angular CLI 6"
echo "-----------------------------------------------------------"
cp package-ng-6-ts-2-9.json package.json
setup_and_benchmark

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 3.0.1 and Angular 6, Angular CLI 6"
echo "-----------------------------------------------------------"
cp package-ng-7-ts-3-0.json package.json
setup_and_benchmark

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 3.0.1 and Angular 7, Angular CLI 6"
echo "------------------------------------------------------"
cp package-ng-7-ts-3-0.json package.json
setup_and_benchmark

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 2.9.2 and Angular 7, Angular CLI 6"
echo "-----------------------------------------------------------"
cp package-ng-7-ts-2-9.json package.json
setup_and_benchmark

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 3 and Angular 7, Angular CLI 7"
echo "-----------------------------------------------------------"
cp package-ng-7-ts-3-0-cli-7.json package.json
setup_and_benchmark