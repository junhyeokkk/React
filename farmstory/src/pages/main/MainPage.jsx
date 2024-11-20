import Best from "../../components/main/Best";
import Info from "../../components/main/Info";
import Latest from "../../components/main/Latest";
import Quick from "../../components/main/Quick";
import Slider from "../../components/main/slider";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function MainPage() {
  return (
    <DefaultLayout>
      <main>
        <Slider />
        <Best />
        <Quick />
        <Latest />
        <Info />
      </main>
    </DefaultLayout>
  );
}
