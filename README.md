
# Makefile React.js starter kit


Simple React.js starter kit with GNU Make and Webpack.

Tested with node.js 5 and npm 3.


Clone this repo and cd into it

    git clone https://github.com/epeli/react-starter
    cd react-starter

Start by installing all the deps from `package.json`.

    npm install

Build production distribution

    make js

Serve it over http

    make server

and open <http://localhost:8080/>

For development you can use

    make js-server

Which will serve the files, build the js bundle and automatially reload
browsers on file changes. Also available at <http://localhost:8080/>

Start hacking on `index.js`
