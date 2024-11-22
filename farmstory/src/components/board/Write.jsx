import useCates from "../../hooks/useCates";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { postArticle } from "../../api/articleAPI";

export default function Write() {
  const [cate1, cate2] = useCates();
  const { username, accessToken, navigate } = useAuth();

  // prettier-ignore
  const [article, setArticle]= useState({
    cate: cate2,
    title: "",
    content: "",
    writer: username,
  });

  const changeHandler = (e) => {
    e.preventDefault();
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const result = postArticle(article, accessToken);
    console.log("result" + result);

    if (result) {
      alert("글 작성 했습니다.");
      navigate("/board/list?cate1=" + cate1 + "&cate2=" + cate2);
    }
  };

  useEffect(() => {
    if (!username) {
      alert("로그인을 하셔야 합니다.");
      navigate("/user/login");
      return;
    }
  }, []);

  return (
    <section className="write">
      <h1>글쓰기</h1>
      <form onSubmit={submitHandler}>
        <table border="0">
          <tbody>
            <tr>
              <th>제목</th>
              <td>
                <input
                  type="text"
                  name="title"
                  placeholder="제목을 입력하세요."
                  value={article.title}
                  onChange={changeHandler}
                />
              </td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                <textarea
                  name="content"
                  value={article.content}
                  onChange={changeHandler}
                ></textarea>
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
          </tbody>
        </table>

        <div>
          <Link
            to={`/board/list?cate1=${cate1}&cate2=${cate2}`}
            className="btn btnCancel"
          >
            취소
          </Link>
          <input type="submit" value="작성완료" className="btn btnComplete" />
        </div>
      </form>
    </section>
  );
}
