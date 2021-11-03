import logo from './logo.svg';
import './App.css';

function App() {
  let pageTitle="welcome to react app"
  return (
    <div className="App">
      <header className="App-header">
       <b>
{pageTitle}
       </b>
        <p>
         Git Session for batch 1.3
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
