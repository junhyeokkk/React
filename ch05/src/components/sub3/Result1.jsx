import { useSearchParams } from "react-router-dom";

export default function Result1() {
  // 쿼리 라우팅 데이터 처리를 위한 훅
  const [searchParams] = useSearchParams();

  // 쿼리 파라미터 수신
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const age = searchParams.get("age");
  return (
    <div className="Result1">
      <span>Result1</span>
      <p>
        이름 : {name}
        <br />
        이메일 : {email}
        <br />
        나이 : {age}
        <br />
      </p>
    </div>
  );
}
