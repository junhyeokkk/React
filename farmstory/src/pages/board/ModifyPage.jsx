import Modify from "../../components/board/Modify";
import BoardLayout from "../../layouts/BoardLayout";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function ModifyPage() {
  return (
    <DefaultLayout>
      <BoardLayout>
        <Modify />
      </BoardLayout>
    </DefaultLayout>
  );
}
