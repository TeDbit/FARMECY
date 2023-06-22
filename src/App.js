import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Sidepanel } from "./Components/Sidepanel/Sidepanel";
import { Main } from "./Components/Main/Main";

function App() {
  return (
    <div className="allBody">
      <div>
        <Navbar />
      </div>
      <div className="center">
        <Sidepanel />
        <Main />
      </div>
    </div>
  );
}

export default App;
/*
import logo from './logo.svg';
import './App.css';

function App() {
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
        </a>
      </header>
    </div>
  );
}

export default App;
*/
