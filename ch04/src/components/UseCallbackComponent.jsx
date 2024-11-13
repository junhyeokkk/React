import { useState, useCallback } from "react";

export default function UseCallbackComponent() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const count1Handler = useCallback(() => {
    setCount1((preCount) => preCount + 1);
  }, []);

  // 함수 식별값 설정
  count1Handler.id = count1Handler.id || crypto.randomUUID();

  // 함수 식별값 출력
  console.log("현재 count1Handler 함수 : " + count1Handler.id);

  return (
    <div className="UseCallbackComponent">
      <h4>UseCallbackComponent</h4>
      <p>count1 : {count1}</p>
      <button onClick={count1Handler}>증가</button>

      <p>count2 : {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>증가</button>
    </div>
  );
}
