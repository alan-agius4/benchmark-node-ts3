#!/bin/bash

echo -e "\n------------------------------------------------------"
echo "Benchmarking using TypeScript 2.9.2 and Angular 6"
echo "------------------------------------------------------"
cp package-ng-6-ts-2-9.json package.json
npm i --loglevel error --no-audit
node_modules/.bin/benchmark -- ng build --prod

echo -e "\n------------------------------------------------------"
echo "Benchmarking using TypeScript 3.0.1 and Angular 6"
echo "------------------------------------------------------"
cp package-ng-7-ts-3-0.json package.json
npm i --loglevel error --no-audit
node_modules/.bin/benchmark -- ng build --prod

echo -e "\n------------------------------------------------------"
echo "Benchmarking using TypeScript 3.0.1 and Angular 7"
echo "------------------------------------------------------"
cp package-ng-7-ts-3-0.json package.json
npm i --loglevel error --no-audit
node_modules/.bin/benchmark -- ng build --prod

echo -e "\n------------------------------------------------------"
echo "Benchmarking using TypeScript 2.9.2 and Angular 7"
echo "------------------------------------------------------"
cp package-ng-7-ts-2-9.json package.json
npm i --loglevel error --no-audit
node_modules/.bin/benchmark -- ng build --prod

echo -e "\n------------------------------------------------------"
echo "Benchmarking using TypeScript 3 and Angular 7, Angular CLI Beta"
echo "------------------------------------------------------"
cp package-ng-7-ts-3-0-cli-beta.json package.json
npm i --loglevel error --no-audit
node_modules/.bin/benchmark -- ng build --prod