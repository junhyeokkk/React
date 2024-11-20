import Terms from "../../components/user/Terms";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function TermsPage() {
  return (
    <>
      <DefaultLayout>
        <div id="user">
          <Terms />
        </div>
      </DefaultLayout>
    </>
  );
}
