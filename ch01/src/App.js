import logo from "./logo.svg";
import "./App.css";

/*

  날짜 : 2024/11/11
  이름 : 최준혁
  내용 : ch01. 리액트 개요와 개발환경 실습

  개발환경 구축
  1) create-react-app 설치
  - npm install -g create-react-app

  2) 프로젝트 생성
  // CRA
  - npx create-react-app 프로젝트명

  3) npm 명령어
  - 실행 : npm run start (npm start)
  - 배포 : npm run build
  - 배포 실행 : npx serve -s build (배포 후 build 폴더를 바탕화면에 꺼내서 깃배시 실행해서 실행)

  주요 구성파일
  index.html
  - 리액트 애플리케이션 시작 페이지
  - id root 태그에 App.js 내용 출력(렌더링)

  index.js
  - 리액트 애플리케이션 진입 파일
  - ReactDOM.render() 함수를 사용해 React 요소를 root에 렌더링

  App.js
  - 리액트 애플리케이션 시작 컴포넌트 파일
  - JSX로 출력되는 요소를 index.html root에 렌더링 

*/
function App() {
  return (
    <div className="App">
      <h3> Hello World</h3>
      <h4> Hello React!</h4>
    </div>
  );
}

export default App;
