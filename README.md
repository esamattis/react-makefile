
# Makefile boilerplate for React.js


Simple React.js boilerplate for GNU Make and Webpack 2.



## Install

Install yarn using

    npm install -g yarn

Clone this repo and cd into it

    git clone https://github.com/epeli/react-makefile myapp
    cd react-starter

Start by installing all the deps from `package.json`

    yarn

Add `yarn.lock` to git

    git add yarn.lock && git commit -m "Add yarn.lock"

## Hacking

Start development server

    make js-server

and open <http://localhost:8080/> and hack on `src/index.js`

## Production

Build production bundle with

    make js

and preview it with

    make server

and open <http://localhost:8080/>


Commit the production bundle with

    make commit-bundle

Using this task is required for commiting the bundle changes because the bundle the changes are hidden from git using `--assume-unchanged`.

