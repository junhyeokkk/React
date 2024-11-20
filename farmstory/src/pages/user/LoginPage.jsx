import Login from "../../components/user/Login";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function LoginPage() {
  return (
    <>
      <DefaultLayout>
        <div id="user">
          <Login />
        </div>
      </DefaultLayout>
    </>
  );
}
