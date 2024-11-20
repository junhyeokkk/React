export default function Info() {
  return (
    <>
      <div className="info">
        <div>
          <img
            src="./images/main_sub2_cs_tit.png"
            className="tit"
            alt="고객센터 안내"
          />
          <div className="tel">
            <img src="./images/main_sub2_cs_img.png" alt="" />
            <img src="./images/main_sub2_cs_txt.png" alt="1666-777" />
            <p className="time">
              평일: AM 09:00 ~ PM 06:00
              <br />
              점심: PM 12:00 ~ PM 01:00
              <br />
              토, 일요일, 공휴일 휴무
            </p>
          </div>
          <div className="btns">
            <a href="#">
              <img src="./images/main_sub2_cs_bt1.png" alt="1:1 고객문의" />
            </a>
            <a href="#">
              <img src="./images/main_sub2_cs_bt2.png" alt="자주묻는질문" />
            </a>
            <a href="#">
              <img src="./images/main_sub2_cs_bt3.png" alt="배송조회" />
            </a>
          </div>
        </div>
        <div>
          <img
            src="./images/main_sub2_account_tit.png"
            className="tit"
            alt="계좌안내"
          />
          <p className="account">
            기업은행 123-456789-01-01-012
            <br />
            국민은행 01-1234-56789
            <br />
            우리은행 123-456789-01-01-012
            <br />
            하나은행 123-456789-01-01
            <br />예 금 주 (주)팜스토리
          </p>
        </div>
        <div>
          <img
            src="./images/main_sub2_notice_tit.png"
            className="tit"
            alt="공지사항"
          />
          <table className="notice" border="0">
            <tr>
              <td>·</td>
              <td>
                <a href="#">
                  안녕하세요. 홈페이지 오픈 기념 이벤트를 진행합니다.
                </a>
              </td>
              <td>20-12-22</td>
            </tr>
            <tr>
              <td>·</td>
              <td>
                <a href="#">
                  안녕하세요. 홈페이지 오픈 기념 이벤트를 진행합니다.
                </a>
              </td>
              <td>20-12-22</td>
            </tr>
            <tr>
              <td>·</td>
              <td>
                <a href="#">
                  안녕하세요. 홈페이지 오픈 기념 이벤트를 진행합니다.
                </a>
              </td>
              <td>20-12-22</td>
            </tr>
            <tr>
              <td>·</td>
              <td>
                <a href="#">
                  안녕하세요. 홈페이지 오픈 기념 이벤트를 진행합니다.
                </a>
              </td>
              <td>20-12-22</td>
            </tr>
            <tr>
              <td>·</td>
              <td>
                <a href="#">
                  안녕하세요. 홈페이지 오픈 기념 이벤트를 진행합니다.
                </a>
              </td>
              <td>20-12-22</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
