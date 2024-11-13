import { useState, useMemo } from "react";

const sleep = (delay) => {
  const start = Date.now();
  while (Date.now() - start < delay);
};

export default function UseMemoComponent() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const heavyProcess = useMemo(() => {
    sleep(2000);
    return count1 + 100;
  }, [count1]);

  return (
    <div className="UseMemoComponent">
      <h4>UseMemoComponet</h4>
      <p>count1 : {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>증가</button>

      <p>heavyProcess 결과 : {heavyProcess}</p>
      <p>count2 : {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>증가</button>
    </div>
  );
}
