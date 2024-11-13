import { useParams } from "react-router-dom";

export default function Result2() {
  const { name, email, age } = useParams();

  return (
    <div className="Result2">
      <span>Result2</span>
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
