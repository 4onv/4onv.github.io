# Makefile
.PHONY: install clean build

install:
    npm install

clean:
    rm -rf dist

build:
    tsc script.ts
