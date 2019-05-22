import React,{useState} from 'react';
import logo from './logo.svg';
import {Counter} from "./Components/HookExamples.jsx";
import {UserLogin } from "./Components/HookExamples.jsx";
import RenderProps from "./Components/RenderProps.jsx";
import './App.css';

function App() {
    const [visible, setVisible] = useState(false);
    const [temp ,setTemp] = useState(false);
  return (
    <div className="App">

      <header className="App-header">
          <button onClick={()=>setVisible(!visible)}>
              show Counter
          </button>
          <button onClick={()=>setTemp(!temp)}>
              show Temperature
          </button>
        <img src={logo} className="App-logo" alt="logo" />
          {visible? <Counter/>:<UserLogin/>}
          {temp? <RenderProps/>:null}
      </header>
    </div>
  );
}

export default App;
