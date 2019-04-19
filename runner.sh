#!/bin/bash

setup_and_benchmark() {
    # rm -rf node_modules
    # npm i --loglevel error --no-audit --no-package-lock
    # npm list typescript
    npm run build-clean
    node_modules/.bin/benchmark -- npm run build-clean
}

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using DL parrallel"
echo "-----------------------------------------------------------"
setup_and_benchmark

echo -e "\n-----------------------------------------------------------"
echo "Benchmarking using DL Sequential"
echo "-----------------------------------------------------------"
cp overrides/sequntial-index.js node_modules/@angular-devkit/build-angular/src/browser/index.js
setup_and_benchmark
