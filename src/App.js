import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className="App">
        <Header className="App-header" />
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
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
