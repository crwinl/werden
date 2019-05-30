
import React from 'react';
import ReactDOM from 'react-dom';


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const name = "vitah";

const element = (
    <h1>
        Hello, {name}!
        Hello, {formatName(user)}!
    </h1>
);

function HelloWorld() {
    return ReactDOM.render(
        element,
        document.getElementById('root')
    )
}

export default HelloWorld;