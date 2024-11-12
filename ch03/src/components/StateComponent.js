import { Component } from "react";

/*
    state
    - state(상태)는 컴포넌트 내부에서 처리되는 값 
    - 함수형 컴포넌트에서는 useState()훅 사용 
*/
class StateComponent extends Component {
  //state 선언, 반드시 이름을 state
  state = {
    num1: 1,
    num2: 2,
  };

  render() {
    return (
      <div className="StateComponent">
        <h4>StateComponent</h4>

        <p>상태값 num1 : {this.state.num1}</p>
        <button
          onClick={() => {
            this.setState({ num1: this.state.num1 + 1 });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ num1: this.state.num1 - 1 });
          }}
        >
          -
        </button>

        <p>상태값 num2 : {this.state.num2}</p>
        <button
          onClick={() => {
            this.setState({ num2: this.state.num2 + 1 });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ num2: this.state.num2 - 1 });
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default StateComponent;
