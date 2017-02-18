import React from "react"; // must be in scope when using JSX
import ReactDOM from "react-dom";

console.log("git date", GIT_COMMIT_DATE);
console.log("git message", GIT_COMMIT_MESSAGE);
console.log("git rev", GIT_COMMIT_REV);

function HelloWorld() {
    return (
        <div>React.js Hello World!</div>
    );
}


const container = document.getElementById("app-container");
ReactDOM.render(<HelloWorld />, container);
