import { useEffect, useState } from "react";

export default function UseEffectComponent() {
  const [name, setName] = useState("홍길동");
  const [age, setAge] = useState(0);

  // mount 단계
  useEffect(() => {
    console.log("UseEffectComponent mount!!!");

    return () => {
      // unmount 단계
      console.log("UseEffectComponent unmount!!!");
    };
  }, []);

  // update 단계
  useEffect(() => {
    console.log("UseEffectComponent update!!!");
  });

  // 의존성 배열의 state 값이 수정될때 호출
  useEffect(() => {
    console.log("UseEffectComponent name update!!!");
  }, [name]);

  return (
    <div className="UseEffectComponent">
      <h4>UseEffectComponent</h4>

      <p>이름 : {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>나이 : {age}</p>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
    </div>
  );
}
