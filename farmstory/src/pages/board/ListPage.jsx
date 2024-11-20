import List from "../../components/board/list";
import BoardLayout from "../../layouts/BoardLayout";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function ListPage() {
  return (
    <DefaultLayout>
      <BoardLayout>
        <List />
      </BoardLayout>
    </DefaultLayout>
  );
}
