
# Makefile boilerplate for React.js


Simple React.js starter kit with GNU Make and Webpack 2.

Tested with node.js 7 and yarn 0.20.3


## Install

Install yarn using

    npm install -g yarn

Clone this repo and cd into it

    git clone https://github.com/epeli/react-starter
    cd react-starter

Start by installing all the deps from `package.json`

    make

## Hacking

Start development server

    make js-server

and open <http://localhost:8080/> and hack on `index.js`

## Production

Build production bundle with

    make js

and preview it with

    make server

and open <http://localhost:8080/>


Commit the production bundle with

    make commit-bundle

Using this task is required for commiting the bundle changes because the bundle changes are hidden from git using `--assume-unchanged`.

