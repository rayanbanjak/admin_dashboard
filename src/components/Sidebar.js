
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
 
     {isOpen && (
    <div
      className="sidebar-overlay"
      onClick={() => setIsOpen(false)}
    />
  )}

      <div className={`sidebar ${isOpen ? "show" : ""}`}>

        <h5 className="p-3 border-bottom text-white">Main Menu</h5>

        <NavLink
          to="/"
          end
          className="nav-link px-3 py-2"
          onClick={() => setIsOpen(false)}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/users"
          className="nav-link px-3 py-2"
          onClick={() => setIsOpen(false)}
        >
          Users
        </NavLink>

        <NavLink
          to="/products"
          className="nav-link px-3 py-2"
          onClick={() => setIsOpen(false)}
        >
          Products
        </NavLink>

        <NavLink
          to="/orders"
          className="nav-link px-3 py-2"
          onClick={() => setIsOpen(false)}
        >
          Orders
        </NavLink>

      </div>
    </>
  );
}

export default Sidebar;