import { Link } from "react-router-dom";

const Pagenation = ({ data, cate1, cate2 }) => {
  return (
    <div className="page">
      {data.prev && (
        <Link
          to={`/board/list?cate1=${cate1}&cate2=${cate2}&pg=${data.start - 1}`}
          className="prev"
        >
          이전
        </Link>
      )}
      {(() => {
        const numbers = [];

        for (let n = data.start; n <= data.end; n++) {
          numbers.push(
            <Link
              to={`/board/list?cate1=${cate1}&cate2=${cate2}&pg=${n}`}
              className={`num ${data.pg == n && "current"}`}
            >
              {n}
            </Link>
          );
        }
        return numbers;
      })()}

      {data.next && (
        <Link
          to={`/board/list?cate1=${cate1}&cate2=${cate2}&pg=${data.end + 1}`}
          className="next"
        >
          다음
        </Link>
      )}
    </div>
  );
};

export default Pagenation;
