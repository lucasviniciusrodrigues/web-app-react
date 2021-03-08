import dog from './dog.png';
import './App.css';
import glass from './glass.htm';
import React from "react";
import Title from "./components/Title";
import Calvin from "./hooks/calvin";
// import Calvin from './components/calvin-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dog} className="App-dog" alt="dog" />
        <img src={glass} className="App-glass"  alt="glass" />
        <Title title="Você gosta de conversar?" comp={<Calvin />} />
      </header>
    </div>
  );
}

export default App;
