import { createBrowserRouter } from "react-router-dom";
import Hello from "../components/sub1/Hello";
import Welcome from "../components/sub1/Welcome";
import Greeting from "../components/sub1/Greeting";

// 라우팅 테이블 설정
const root = createBrowserRouter([
  { path: "/sub4/hello", element: <Hello /> },
  { path: "/sub4/welcome", element: <Welcome /> },
  { path: "/sub4/greeting", element: <Greeting /> },
]);

// 라우터 내보내기
export default root;
