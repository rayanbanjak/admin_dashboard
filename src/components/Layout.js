import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 bg-light min-vh-100">
            <Sidebar />
          </div>

          <div className="col-md-10 p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;