#!/usr/bin/env sh

# abort on errors
set -e

# navigate into the build output directory
cd dist
echo 'ohjiho.dev' > CNAME

echo Deploying...
git add -A
git commit -m 'Deployment'
git push -f git@github.com:jh8oh/jh8oh.github.io.git master

cd -
