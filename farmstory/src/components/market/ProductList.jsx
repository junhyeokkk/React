export default function ProductList() {
  return (
    <>
      {" "}
      <p className="sort">
        <a href="#" className="on">
          전체(10) |
        </a>
        <a href="#">과일 |</a>
        <a href="#">야채 |</a>
        <a href="#">곡류</a>
      </p>
      <table border="0">
        <thead>
          <tr>
            <th>이미지</th>
            <th>종류</th>
            <th>상품명</th>
            <th>할인</th>
            <th>포인트</th>
            <th>판매가격</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="./view.html">
                <img
                  src="../images/market_item1.jpg"
                  className="thumbnail"
                  alt="사과 500g"
                />
              </a>
            </td>
            <td className="type">과일</td>
            <td className="title">
              <a href="#">사과 500g</a>
            </td>
            <td className="discount">10%</td>
            <td className="point">400P</td>
            <td className="price">
              <strong>3,600</strong>
              <del>4,000</del>
            </td>
          </tr>
          <tr>
            <td>
              <a href="./view.html">
                <img
                  src="../images/market_item2.jpg"
                  className="thumbnail"
                  alt="사과 500g"
                />
              </a>
            </td>
            <td className="type">과일</td>
            <td className="title">
              <a href="#">전남 완주 배 5kg</a>
            </td>
            <td className="discount">10%</td>
            <td className="point">400P</td>
            <td className="price">
              <strong>3,600</strong>
              <del>4,000</del>
            </td>
          </tr>
          <tr>
            <td>
              <a href="./view.html">
                <img
                  src="../images/market_item3.jpg"
                  className="thumbnail"
                  alt="사과 500g"
                />
              </a>
            </td>
            <td className="type">과일</td>
            <td className="title">
              <a href="#">방울 토마토</a>
            </td>
            <td className="discount">10%</td>
            <td className="point">400P</td>
            <td className="price">
              <strong>3,600</strong>
              <del>4,000</del>
            </td>
          </tr>
          <tr>
            <td>
              <a href="./view.html">
                <img
                  src="../images/market_item6.jpg"
                  className="thumbnail"
                  alt="사과 500g"
                />
              </a>
            </td>
            <td className="type">곡류</td>
            <td className="title">
              <a href="#">무농약 현미</a>
            </td>
            <td className="discount">10%</td>
            <td className="point">400P</td>
            <td className="price">
              <strong>3,600</strong>
              <del>4,000</del>
            </td>
          </tr>
          <tr>
            <td>
              <a href="./view.html">
                <img
                  src="../images/market_item7.jpg"
                  className="thumbnail"
                  alt="사과 500g"
                />
              </a>
            </td>
            <td className="type">야채</td>
            <td className="title">
              <a href="#">팜스토리 하루야채 샐러드</a>
            </td>
            <td className="discount">10%</td>
            <td className="point">400P</td>
            <td className="price">
              <strong>3,600</strong>
              <del>4,000</del>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="paging">
        <a href="#">&lt;</a>
        <a href="#" className="on">
          [1]
        </a>
        <a href="#">[2]</a>
        <a href="#">[3]</a>
        <a href="#">[4]</a>
        <a href="#">[5]</a>
        <a href="#">&gt;</a>
      </p>
    </>
  );
}
