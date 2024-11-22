import View from "../../components/board/View";
import DefaultLayout from "../../layouts/DefaultLayout";
import SubLayout from "../../layouts/SubLayout";

export default function ViewPage() {
  return (
    <DefaultLayout>
      <SubLayout>
        <View/>
      </SubLayout>
    </DefaultLayout>
  );
}
