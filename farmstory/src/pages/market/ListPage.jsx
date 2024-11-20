import ProductList from "../../components/market/ProductList";
import DefaultLayout from "../../layouts/DefaultLayout";
import SubLayout from "../../layouts/SubLayout";

export default function ListPage() {
  return (
    <DefaultLayout>
      <SubLayout>
        <ProductList />
      </SubLayout>
    </DefaultLayout>
  );
}
