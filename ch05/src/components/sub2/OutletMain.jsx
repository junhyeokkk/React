import { Link, Route, Routes } from "react-router-dom";
import Child2 from "./Child2";
import Child1 from "./Child1";
import Parent from "./Parent";

export default function OutletMain() {
  return (
    <div className="OutletMain">
      <h4>중첩 라우팅</h4>

      <p>
        <Link to="/parent">parent</Link>
        <Link to="/parent/child1">child1</Link>
        <Link to="/parent/child2">child2</Link>
      </p>

      <Routes path="/parent" element={<Parent />}>
        <Route path="/parent/child1" element={<Child1 />} />
        <Route path="/parent/child2" element={<Child2 />} />
      </Routes>
    </div>
  );
}
