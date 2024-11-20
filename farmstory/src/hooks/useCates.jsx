import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const useCates = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const pathValues = location.pathname.split("/");

  let cate1 = pathValues[1];
  let cate2 = pathValues[2];

  if (cate1 === "board") {
    cate1 = searchParams.get("cate1");
    cate2 = searchParams.get("cate2");
  }

  return [cate1, cate2];
};

export default useCates;
