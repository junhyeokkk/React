import Header from "./../components/common/Header";
import Footer from "./../components/common/Footer";

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
  return (
    <div id="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
