import logo from './logo.svg';
import './App.css';
import first from './index/first';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to a fully build javascript web application</h1>
      <p>here we use React to build a fancy app</p>
      <ol>
    <ul>example 1</ul>
        <ul>example 2</ul>
        <ul>example 3</ul>
        <ul>example 4</ul>
      </ol>

      <h2 id="techtxt"> tech stack used</h2>
      <img src= {logo} id = "ReactLogo" alt = ""></img>
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
