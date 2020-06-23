import React from 'react';
import logo from './logo.svg';
import './App.css';

// component dalam component
function Biodata(props) {
  return <span>umurnya {props.age} </span>
}


// component dan props
function Greeting(props) {
  return <h1>Halow ini {props.name} - <Biodata age={props.age}/></h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ini Coba</p>
        <Greeting name="wilden" age="10"/>
        <Greeting name="ali" age="35"/>
      </header>
    </div>
  );
}

export default App;
