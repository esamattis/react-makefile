import React from "react"; // must be in scope when using JSX
import ReactDOM from "react-dom";


function HelloWorld() {
    return (
        <div>React.js Hello World!</div>
    );
}


const container = document.getElementById("app-container");
ReactDOM.render(<HelloWorld />, container);
