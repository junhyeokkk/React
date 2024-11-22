import { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem";
import { useSearchParams } from "react-router-dom";
import { getProduct } from "../../api/productAPI";

const initState = {
  dtoList: [],
  cate: "",
  pg: 1,
  size: 10,
  total: 0,
  startNo: 0,
  start: 0,
  end: 0,
  prev: false,
  next: false,
  type: null,
  keyword: null,
};

export default function ProductList() {
  const [data, setData] = useState(initState);

  const [searchParams] = useSearchParams();
  const pg = searchParams.get("pg") || 1;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProduct(pg);
      console.log(data);
      setData(data);
    };
    fetchData();
  }, [pg]);

  return (
    <>
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
          {data.dtoList.map((product, index) => (
            <ProductListItem key={index} product={product} />
          ))}
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
