export PATH := node_modules/.bin:$(PATH)
export SHELL := /bin/bash # Require for OS X for some reason

all: npm js

npm:
	npm install

js:
	NODE_ENV=production webpack -p --progress

server:
	serve -p 8080

js-server:
	webpack-dev-server -d --progress --inline
	

js-watch:
	webpack -d --progress --watch


