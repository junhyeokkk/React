import { useReducer } from "react";

export default function useCounter(init, step) {
  // 상태 처리 함수 정의
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "update":
          return { count: state.count + action.step };
        case "reset":
          return { count: action.init };
        default:
          return state;
      }
    },
    { count: init }
  );

  // 핸들러 정의
  const btnUp = () => dispatch({ type: "update", step });
  const btnDown = () => dispatch({ type: "update", step: -step });
  const btnReset = () => dispatch({ type: "reset", init });

  // 사용자 정의 훅은 일반적으로 배열로 반환
  return [state, btnUp, btnDown, btnReset];
}
