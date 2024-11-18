import { Link, Route, Routes } from "react-router-dom";
import User1List from "./User1List";
import User1Register from "./User1Register";
import User1Modify from "./User1Modify";

export default function User1Component() {
  return (
    <div className="User1Component">
      <h4>User1</h4>
      <p>
        <Link to="/user1/list">목록</Link> &nbsp;
        <Link to="/user1/register">등록</Link>
      </p>

      <Routes>
        <Route path="/user1/list" element={<User1List />}></Route>
        <Route path="/user1/register" element={<User1Register />}></Route>
        <Route path="/user1/modify" element={<User1Modify />}></Route>
      </Routes>
    </div>
  );
}
