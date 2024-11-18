import "./App.css";
import User1Component from "./components/user1/User1Component";
import User2Component from "./components/user2/User2Component";

function App() {
  return (
    <div className="App">
      <h3>ch07.리액트 HTTP통신</h3>
      <User1Component />
      <User2Component />
    </div>
  );
}

export default App;
