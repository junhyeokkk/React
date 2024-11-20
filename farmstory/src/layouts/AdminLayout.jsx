import Footer from "../components/admin/Footer";
import Header from "../components/admin/Header";

// eslint-disable-next-line react/prop-types
export default function AdminLayout({ children }) {
  return (
    <div id="admin-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
