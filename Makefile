export PATH := node_modules/.bin:$(PATH)
export SHELL := /bin/bash # Required for OS X for some reason

all: yarn js

npm:
	yarn

js:
	NODE_ENV=production webpack -p --progress

server:
	python -m SimpleHTTPServer 8080

js-server:
	webpack-dev-server -d --progress --inline
	

js-watch:
	webpack -d --progress --watch


