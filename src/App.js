import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import logo from './logo.svg';

import PostDetail from './views/post/index';
import Home from './views/home/index';

function App() {
  function handleClick(e) {
    //ReactDOM.render(<PostDetail />, document.getElementById('root'));
    ReactDOM.render(<Home />, document.getElementById('root'));
  }

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
      </p>
        <a href="#/postdetail" onClick={handleClick} rel="noopener noreferrer">
          Click me
    </a>
      </header>
    </div>


  );
}

export default App;
