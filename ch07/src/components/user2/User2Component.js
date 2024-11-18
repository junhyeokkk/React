import { Link, Route, Routes } from "react-router-dom";
import User2List from "./User2List";
import User2Register from "./User2Register";
import User2Modify from "./User2Modify";

export default function User2Component() {
  return (
    <div className="User2Component">
      <h4>User2</h4>
      <p>
        <Link to="/user2/list">목록</Link> &nbsp;
        <Link to="/user2/register">등록</Link>
      </p>

      <Routes>
        <Route path="/user2/list" element={<User2List />}></Route>
        <Route path="/user2/register" element={<User2Register />}></Route>
        <Route path="/user2/modify" element={<User2Modify />}></Route>
      </Routes>
    </div>
  );
}
