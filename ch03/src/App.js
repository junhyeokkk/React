import logo from "./logo.svg";
import "./App.css";
import ClassTypeComponent from "./components/ClassTypeComponent";
import FunctionTypeComp from "./components/FunctionTypeComp";
import ParentComponent from "./components/ParentComponent";
import PropsComponent from "./components/PropsComponent";
import ContentComponent from "./components/ContentComponent";
import StateComponent from "./components/StateComponent";
import LifeCycleComponent from "./components/LifeCycleComponent";
/*
  날짜 : 2024/11/12
  이름 : 최준혁
  내용 : ch03. 리액트 컴포넌트 
*/
function App() {
  return (
    <div className="App">
      <h3>ch03. 리액트 컴포넌트</h3>
      <ClassTypeComponent />
      <FunctionTypeComp />
      <ParentComponent />
      <PropsComponent
        tit="props 컴포넌트"
        message="속성을 갖는 컴포넌트 입니다."
      />

      <ContentComponent>
        <p> 내용을 갖는 컴포넌트 입니다.</p>
      </ContentComponent>
      <StateComponent />
      <LifeCycleComponent />
    </div>
  );
}

export default App;
