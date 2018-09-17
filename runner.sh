#!/bin/bash

setup_and_benchmark() {
    rm -rf node_modules
    npm i --loglevel error --no-audit --no-package-lock
    npm list typescript
    npm run build-clean
    node_modules/.bin/benchmark -- npm run build-clean
}

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 2.9, Angular 7 & Angular CLI 7"
echo "-----------------------------------------------------------"
cp package-ng-7-ts-2-9-cli-7.json package.json
setup_and_benchmark

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 2.9, Angular 7 & Angular CLI 7"
echo "-----------------------------------------------------------"
cp package-ng-7-ts-2-9-cli-7.json package.json
setup_and_benchmark

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 2.9, Angular 6 & Angular CLI 6"
echo "-----------------------------------------------------------"
cp package-ng-6-ts-2-9.json package.json
setup_and_benchmark

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 2.9, Angular 6 & Angular CLI 7"
echo "-----------------------------------------------------------"
cp package-ng-6-ts-2-9-cli-7.json package.json
setup_and_benchmark

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 3, Angular 6 & Angular CLI 6"
echo "-----------------------------------------------------------"
cp package-ng-6-ts-3-0.json package.json
setup_and_benchmark

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 3, Angular 7 & Angular CLI 6"
echo "------------------------------------------------------"
cp package-ng-7-ts-3-0.json package.json
setup_and_benchmark

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 3, Angular 6 & Angular CLI 7"
echo "------------------------------------------------------"
cp package-ng-6-ts-3-cli-7.json package.json
setup_and_benchmark

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 2.9, Angular 7 & Angular CLI 6"
echo "-----------------------------------------------------------"
cp package-ng-7-ts-2-9.json package.json
setup_and_benchmark

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using TypeScript 3, Angular 7 & Angular CLI 7"
echo "-----------------------------------------------------------"
cp package-ng-7-ts-3-0-cli-7.json package.json
setup_and_benchmark
