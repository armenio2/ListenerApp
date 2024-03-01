import logo from './logo.svg';
import './App.css';
import { SegmentProvider } from './SegmentProvider';
import SegmentListener from './SegmentListener';
function App() {
  return (
    <div className="App">
      <SegmentProvider>
        <SegmentListener />
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
          <button>lala</button>
          <button>fgasdijoaeiwj</button>
          <button>12312ala</button>
          <button>a</button>
          <button>lal</button>
          <button>la2</button>
        </header>
      </SegmentProvider>
    </div>
  );
}

export default App;
