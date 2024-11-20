import DefaultLayout from "../../layouts/DefaultLayout";
import SubLayout from "../../layouts/SubLayout";

export default function DirectionPage() {
  return (
    <DefaultLayout>
      <SubLayout>
        <p>
          <strong>팜스토리</strong>
          <br />
          주소: 경기도 이천시 잘한다구 신난다동 123
          <br />
          전화: 01-234-5678
          <br />
        </p>
        <p>
          <strong>찾아오시는길</strong>
          <br />

          <div
            id="daumRoughmapContainer1668214668575"
            className="root_daum_roughmap root_daum_roughmap_landing"
          ></div>
        </p>
      </SubLayout>
    </DefaultLayout>
  );
}
