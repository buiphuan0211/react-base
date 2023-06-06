import logo from "./logo.svg";
import "./App.css";
import TodoFeature from "./features/Todo/";

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoFeature />
      </header>
    </div>
  );
}

export default App;
