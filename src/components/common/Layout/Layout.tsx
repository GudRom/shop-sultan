import { Outlet } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.scss";

interface Props {}

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <main className="main">
        <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
