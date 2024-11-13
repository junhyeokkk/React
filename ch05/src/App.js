import "./App.css";
import Main from "./components/sub1/Main";
import { BrowserRouter, Link, RouterProvider } from "react-router-dom";
import OutletMain from "./components/sub2/OutletMain";
import ParamsMain from "./components/sub3/ParamsMain";

import root from "./router/root";

/*
  날짜 : 2024/11/13
  이름 : 최준혁
  내용 : ch05. 리액트 라우터 실습
*/

function App() {
  return (
    <div className="App">
      <h3>ch05. React Router</h3>
      <h4>Router 기본</h4>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      <hr />
      <h4>Router Outlet</h4>
      <BrowserRouter>
        <OutletMain />
      </BrowserRouter>
      <hr />
      <h4>Router 데이터전송</h4>
      <BrowserRouter>
        <ParamsMain />
      </BrowserRouter>
      <hr />
      <h4>사용자 정의 Router</h4>
      <RouterProvider router={root} />
    </div>
  );
}

export default App;
