import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function User1Modify() {
  // 라우팅 기능을 제공하는 훅
  const navigate = useNavigate();

  // 쿼리 스트링 정보를 제공하는 훅
  const [searchParams] = useSearchParams();

  // 쿼리 파라미터 수신
  const uid = searchParams.get("uid");

  const [user, setUser] = useState({
    uid: "",
    name: "",
    birth: "",
    hp: "",
    age: 0,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/ch09/user1/${uid}`)
      .then((response) => {
        console.log(response.data);

        // 서버에서 받아온 데이터로 상태 업데이트
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeHandler = (e) => {
    e.preventDefault();

    // 상태 업데이트
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // 수정하기 핸들러

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:8080/ch09/user1", user)
      .then((response) => {
        console.log(response.data);

        // 수정완료 후 목록 전환
        navigate("/user1/list");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="User1Modify">
      <h4>User1Modify</h4>
      <span>User1 수정</span>

      <form onSubmit={submitHandler}>
        <table border={1}>
          <tr>
            <td>아이디</td>
            <td>
              <input type="text" name="uid" value={user.uid} readOnly />
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>생년월일</td>
            <td>
              <input
                type="date"
                name="birth"
                value={user.birth}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>휴대폰</td>
            <td>
              <input
                type="text"
                name="hp"
                value={user.hp}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>나이</td>
            <td>
              <input
                type="number"
                name="age"
                value={user.age}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="right">
              <input type="submit" value={"수정하기"} />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
