import { Link } from "react-router-dom";
import useCates from "../../hooks/useCates";

export default function Modify() {
  const [cate1, cate2] = useCates();
  
  return (
    <section className="modify">
      <h1>글수정</h1>
      <form action="#">
        <table border="0">
          <tr>
            <th>제목</th>
            <td>
              <input
                type="text"
                name="title"
                placeholder="제목을 입력하세요."
              />
            </td>
          </tr>
          <tr>
            <th>내용</th>
            <td>
              <textarea name="content"></textarea>
            </td>
          </tr>
          <tr>
            <th>파일</th>
            <td>
              <p>최대 2개 파일 첨부 가능, 각 파일당 최대 10MB까지 가능</p>
              <input type="file" name="file1" />
              <input type="file" name="file2" />
            </td>
          </tr>
        </table>

        <div>
          <Link
            to={`/board/list?cate1=${cate1}&cate2=${cate2}`}
            className="btn btnCancel"
          >
            취소
          </Link>
          <input type="submit" value="수정완료" className="btn btnComplete" />
        </div>
      </form>
    </section>
  );
}
