import { Link } from "react-router-dom";
import useCates from "./../../hooks/useCates";

export default function List() {
  const [cate1, cate2] = useCates();

  return (
    <section className="list">
      <nav>
        <form action="#">
          <input
            type="text"
            name="search"
            placeholder="제목 키워드, 글쓴이 검색"
          />
          <input type="submit" value="검색" />
        </form>
      </nav>
      <h1>글목록</h1>
      <table border="0">
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>날짜</th>
          <th>조회</th>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <Link to={`/board/view?cate1=${cate1}&cate2=${cate2}`}>
              공지사항 게시물입니다.[3]
            </Link>
          </td>
          <td>길동이</td>
          <td>20-05-12</td>
          <td>12</td>
        </tr>
      </table>

      <div className="page">
        <a href="#" className="prev">
          이전
        </a>
        <a href="#" className="num current">
          1
        </a>
        <a href="#" className="num">
          2
        </a>
        <a href="#" className="num">
          3
        </a>
        <a href="#" className="next">
          다음
        </a>
      </div>

      <Link
        to={`/board/write?cate1=${cate1}&cate2=${cate2}`}
        className="btn btnWrite"
      >
        글쓰기
      </Link>
    </section>
  );
}
