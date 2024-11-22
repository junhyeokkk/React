/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { PRODUCT_THUMB_URI } from "../../api/_URI";

export default function ProductListItem({ product }) {
  return (
    <tr>
      <td>
        <Link to="/product/view">
          <img
            src={`${PRODUCT_THUMB_URI}/${product.thumb120}`}
            className="thumbnail"
            alt="사과 500g"
          />
        </Link>
      </td>
      <td className="type">{product.type}</td>
      <td className="title">
        <a href="#">{product.productName}</a>
      </td>
      <td className="discount">{product.discount}</td>
      <td className="point">{product.point}</td>
      <td className="price">
        <strong>{product.price}</strong>
        <del>{product.price}</del>
      </td>
    </tr>
  );
}
