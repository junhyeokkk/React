import Write from "../../components/board/Write";
import DefaultLayout from "../../layouts/DefaultLayout";
import SubLayout from "../../layouts/SubLayout";

export default function WritePage() {
  return (
    <DefaultLayout>
      <SubLayout>
        <Write />
      </SubLayout>
    </DefaultLayout>
  );
}
