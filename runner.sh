#!/bin/bash

npm i --loglevel error --no-audit --ignore-scripts

setup_and_benchmark() {
    # npm list typescript
    # npm run build-clean
    node_modules/.bin/benchmark -- npm run build-clean
}


echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using No DL"
echo "-----------------------------------------------------------"
setup_and_benchmark


echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using DL parrallel"
echo "-----------------------------------------------------------"
cp overrides/browserslist src/browserslist
setup_and_benchmark


echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using DL Sequential"
echo "-----------------------------------------------------------"
cp overrides/browserslist src/browserslist
cp overrides/sequntial-index.js node_modules/@angular-devkit/build-angular/src/browser/index.js
setup_and_benchmark

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using DL MultiCompiler"
echo "-----------------------------------------------------------"
cp overrides/browserslist src/browserslist
cp overrides/multicompiler/index.js node_modules/@angular-devkit/build-angular/src/browser/index.js
cp overrides/multicompiler/webpack.js node_modules/@angular-devkit/build-webpack/src/webpack/index.js
setup_and_benchmark
