import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <h1>A footer</h1>
    </div>
  );
};

export default Layout;
