import React from 'react';
import { useSelector } from 'react-redux';
import logo from './logo.svg';
import './styles.css';

const App = () => {
  const connect = useSelector((state: { common: { value: number}}) => {
    console.log(state);
    return state.common
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {connect?.value}
        </a>
      </header>
    </div>
  );
}

export default App;
