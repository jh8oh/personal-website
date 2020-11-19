#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Linting...
npm run lint

echo Building...
npm run build

# navigate into the build output directory
cd dist
echo 'ohjiho.dev' > CNAME

echo Deploying...
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:jh8oh/jh8oh.github.io.git master

cd -
