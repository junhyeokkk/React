import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="register">
      <form action="#">
        <h2 className="tit">사이트 이용정보 입력</h2>
        <table border="1">
          <tr>
            <td>아이디</td>
            <td>
              <input type="text" name="uid" placeholder="아이디 입력" />
              <button type="button">
                <img src="/images/chk_id.gif" alt="중복확인" />
              </button>
              <span className="uidResult"></span>
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input type="password" name="pass1" placeholder="비밀번호 입력" />
            </td>
          </tr>
          <tr>
            <td>비밀번호 확인</td>
            <td>
              <input
                type="password"
                name="pass2"
                placeholder="비밀번호 입력 확인"
              />
            </td>
          </tr>
        </table>

        <h2 className="tit">개인정보 입력</h2>
        <table border="1">
          <tr>
            <td>이름</td>
            <td>
              <input type="text" name="name" placeholder="이름 입력" />
            </td>
          </tr>
          <tr>
            <td>별명</td>
            <td>
              <p className="nickInfo">공백없는 한글, 영문, 숫자 입력</p>
              <input type="text" name="nick" placeholder="별명 입력" />
              <button type="button">
                <img src="/images/chk_id.gif" alt="중복확인" />
              </button>
              <span className="nickResult"></span>
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>
              <input type="email" name="email" placeholder="이메일 입력" />
              <button type="button">
                <img src="/images/chk_auth.gif" alt="인증번호 받기" />
              </button>
              <div className="auth">
                <input type="text" name="auth" placeholder="인증번호 입력" />
                <button type="button">
                  <img src="/images/chk_confirm.gif" alt="확인" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>휴대폰</td>
            <td>
              <input type="text" name="hp" placeholder="휴대폰 입력" />
            </td>
          </tr>
          <tr>
            <td>주소</td>
            <td>
              <input type="text" name="zip" placeholder="우편번호" />
              <button type="button">
                <img src="/images/chk_post.gif" alt="우편번호찾기" />
              </button>
              <input type="text" name="addr1" placeholder="주소 검색" />
              <input type="text" name="addr2" placeholder="상세주소 입력" />
            </td>
          </tr>
        </table>

        <div>
          <Link to="/user/login" className="btn btnCancel">
            취소
          </Link>
          <input type="submit" value="회원가입" className="btn btnRegister" />
        </div>
      </form>
    </section>
  );
}
