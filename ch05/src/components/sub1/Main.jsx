import { Route, Link, Routes } from "react-router-dom";
import Greeting from "./Greeting";
import Hello from "./Hello";
import Welcome from "./Welcome";

const Main = () => {
  return (
    <div className="Main">
      <h4>리액트 라우터 기본</h4>

      <p>
        <Link to="/hello">hello</Link> &nbsp;
        <Link to="/welcome">welcome</Link> &nbsp;
        <Link to="/greeting">greeting</Link> &nbsp;
      </p>

      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  );
};

export default Main;
