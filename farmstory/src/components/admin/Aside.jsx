import { Link } from "react-router-dom";
export default function Aside() {
  return (
    <aside>
      <h3>주요기능</h3>
      <ul className="lnb">
        <li>
          <span>상품관리</span>
          <ol>
            <li>
              <a href="./product/list.html">상품목록</a>
            </li>
            <li>
              <Link to="/admin/product/register">상품등록</Link>
            </li>
          </ol>
        </li>
        <li>
          <span>주문관리</span>
          <ol>
            <li>
              <a href="./order/list.html">주문목록</a>
            </li>
          </ol>
        </li>
        <li>
          <span>회원관리</span>
          <ol>
            <li>
              <a href="./user/list.html">회원목록</a>
            </li>
          </ol>
        </li>
      </ul>
    </aside>
  );
}
