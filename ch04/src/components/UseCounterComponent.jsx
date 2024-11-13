import useCounter from "../hooks/useCounter";

export default function UseCounterComponent() {
  // 커스텀 훅 호출
  const [state, btnUp, btnDown, btnReset] = useCounter(0, 1);

  return (
    <div className="UseCounterComponent">
      <h4>UseCounterComponent</h4>
      <p>{state.count}</p>
      <button onClick={btnUp}>증가</button>
      <button onClick={btnDown}>감소</button>
      <button onClick={btnReset}>리셋</button>
    </div>
  );
}
