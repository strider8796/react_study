import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../../components/organisms/header'


function App() {
  const f = (p: string) => {
    console.log(p);
    return p.toUpperCase();
  }

  return (
    <div>
      <Header />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {f('Learn React')}
          </a>
          {/*<span>{props || 'null'}</span>*/}
        </header>
      </div>
    </div>

  );
}

export default App;
