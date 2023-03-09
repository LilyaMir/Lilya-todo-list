import logo from './foto.jpg';
import Hello from './Hello';
import Name from './Name';
import Foto from './Foto';
import './App.css';

function App() {
  const message = 'Hello, I am your first React code.';
  return (
    <div className="App">
      <header className="App-header">
        <Name />        
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
