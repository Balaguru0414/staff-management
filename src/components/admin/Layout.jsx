import { Outlet, useLocation } from "react-router-dom";
import Aside from "./components/Aside";

const Layout = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const pathAside =
    pathname != "/admin" &&
    pathname != "/admin/login" &&
    pathname != "/admin/register";
  return (
    <section className="flex">
      {pathAside && <Aside />}
      <div className={`w-full ${pathAside && "p-5"}`}>
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
