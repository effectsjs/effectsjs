set -ex
git submodule init
git submodule update
cd babel
make bootstrap
make build
cd ..
