
import React from 'react';
import ReactDOM from 'react-dom';

var name = "vitah";
const element = <h1>Hello,{name}</h1>

function HelloWorld() {
    return ReactDOM.render(
        element,
        document.getElementById('root')
    )
}

export default HelloWorld;