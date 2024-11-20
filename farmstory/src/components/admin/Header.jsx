import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img src="/images/admin_logo.jpg" alt="로고" />
      </Link>
      <p>
        <a href="/">HOME |</a>
        <a href="#">로그아웃 |</a>
        <a href="#">고객센터</a>
      </p>
    </header>
  );
}
