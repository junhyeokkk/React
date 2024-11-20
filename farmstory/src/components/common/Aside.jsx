import { Link } from "react-router-dom";
import useCates from "../../hooks/useCates";
export default function Aside() {
  const [cate1, cate2] = useCates();
  return (
    <>
      {cate1 === "introduction" && (
        <aside>
          <img src="../images/sub_aside_cate1_tit.png" alt="팜스토리 소개" />

          <ul className="lnb">
            <li className={cate2 === "hello" ? "on" : "off"}>
              <Link to="/introduction/hello">인사말</Link>
            </li>
            <li className={cate2 === "direction" ? "on" : "off"}>
              <Link to="/introduction/direction">찾아오시는길</Link>
            </li>
          </ul>
        </aside>
      )}

      {cate1 === "market" && (
        <aside>
          <img src="/images/sub_aside_cate2_tit.png" alt="장보기" />

          <ul className="lnb">
            <li className="on">
              <Link to="/market/list">장보기</Link>
            </li>
          </ul>
        </aside>
      )}
      {cate1 === "croptalk" && (
        <aside>
          <img src="/images/sub_aside_cate3_tit.png" alt="농작물이야기" />

          <ul className="lnb">
            <li className={cate2 === "story" ? "on" : "off"}>
              <Link to="/board/list?cate1=croptalk&cate2=story">
                농작물이야기
              </Link>
            </li>
            <li className={cate2 === "grow" ? "on" : "off"}>
              <Link to="/board/list?cate1=croptalk&cate2=grow">텃밭가꾸기</Link>
            </li>
            <li className={cate2 === "school" ? "on" : "off"}>
              <Link to="/board/list?cate1=croptalk&cate2=school">귀농학교</Link>
            </li>
          </ul>
        </aside>
      )}
      {cate1 === "event" && (
        <aside>
          <img src="/images/sub_aside_cate4_tit.png" alt="이벤트" />

          <ul className="lnb">
            <li className="on">
              <Link to="/board/list?cate1=event&cate2=info">이벤트</Link>
            </li>
          </ul>
        </aside>
      )}
      {cate1 === "community" && (
        <aside>
          <img src="/images/sub_aside_cate5_tit.png" alt="커뮤니티" />

          <ul className="lnb">
            <li className={cate2 === "notice" ? "on" : "off"}>
              <Link to="/board/list?cate1=community&cate2=notice">
                공지사항
              </Link>
            </li>
            <li className={cate2 === "menu" ? "on" : "off"}>
              <Link to="/board/list?cate1=community&cate2=menu">
                오늘의식단
              </Link>
            </li>
            <li className={cate2 === "chef" ? "on" : "off"}>
              <Link to="/board/list?cate1=community&cate2=chef">
                나도요리사
              </Link>
            </li>
            <li className={cate2 === "qna" ? "on" : "off"}>
              <Link to="/board/list?cate1=community&cate2=qna">고객문의</Link>
            </li>
            <li className={cate2 === "faq" ? "on" : "off"}>
              <Link to="/board/list?cate1=community&cate2=faq">
                자주묻는질문
              </Link>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
}
