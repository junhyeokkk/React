import { useReducer } from "react";

// 상태 선언
const initCountState = {
  count: 0,
};

// 리듀서(상태값을 처리하는 함수) 정의
function countReducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
  }
}

// 초기 상태 선언
const initUserState = {
  uid: "",
  name: "",
  age: 0,
};

// 리듀서 정의
function userReducer(state, action) {
  console.log("action : " + action.name);
  console.log("action : " + action.value);

  //   const user = { ...state };

  //   if (action.name === "uid") {
  //     user.uid = action.value;
  //   }
  //   if (action.name === "name") {
  //     user.name = action.value;
  //   }
  //   if (action.name === "age") {
  //     user.age = action.value;
  //   }
  return { ...state, [action.name]: action.value };
}

export default function UseReducerComponent() {
  // useReducer(), 사용자 정의 state와 처리함수를 정의하는 react hook
  const [countState, countDispatch] = useReducer(countReducer, initCountState);
  const [userState, userDispatch] = useReducer(userReducer, initUserState);
  return (
    <div className="UseReducerComponent">
      <h4>UseReducerComponent</h4>

      <p>count: {countState.count}</p>
      <button onClick={() => countDispatch({ type: "INCREASE" })}>증가</button>
      <button onClick={() => countDispatch({ type: "DECREASE" })}>감소</button>
      <button onClick={() => countDispatch({ type: "RESET" })}>리셋</button>

      <p>
        아이디 : {userState.uid}
        <br />
        이름 : {userState.name}
        <br />
        나이 : {userState.age}
        <br />
      </p>
      <input
        type="text"
        name="uid"
        value={userState.uid}
        onChange={(e) => userDispatch(e.target)}
      ></input>
      <br />
      <input
        type="text"
        name="name"
        value={userState.name}
        onChange={(e) => userDispatch(e.target)}
      ></input>
      <br />
      <input
        type="text"
        name="age"
        value={userState.age}
        onChange={(e) => userDispatch(e.target)}
      ></input>
      <br />
    </div>
  );
}
