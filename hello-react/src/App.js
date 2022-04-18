import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div
          className="greeting"
          style={{ background: "black", color: "white" }}
          onClick={() => alert('hello')}
      >
        Hello World
      </div>
  );
}

export default App;
