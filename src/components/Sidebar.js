import { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-link text-white d-md-none sidebar-toggle-btn p-0 border-0"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"  >
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4.1a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
      </button>

      <div className={`sidebar-backdrop d-md-none ${isOpen ? "show" : ""}`} onClick={() => setIsOpen(false)}></div>
      <div className={`col-md-3 col-lg-2 sidebar-col ${isOpen ? "show" : ""}`}>
        <div className="sidebar-container py-4 px-2">
          <div className="sidebar-header mb-3 px-3">
            <h6 className="text-uppercase text-muted fw-bold" style={{ fontSize: "0.75rem", letterSpacing: "1px" }}>
              Main Menu
            </h6>
          </div>

          <div className="nav flex-column nav-pills">
            <NavLink
              to="/"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `nav-link sidebar-link mb-2 py-2.5 px-3 ${
                  isActive ? "active-sidebar-link" : ""
                }`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/users"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `nav-link sidebar-link mb-2 py-2.5 px-3 ${
                  isActive ? "active-sidebar-link" : ""
                }`
              }
            >
              Users
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `nav-link sidebar-link mb-2 py-2.5 px-3 ${
                  isActive ? "active-sidebar-link" : ""
                }`
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/orders"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `nav-link sidebar-link mb-2 py-2.5 px-3 ${
                  isActive ? "active-sidebar-link" : ""
                }`
              }
            >
              Orders
            </NavLink>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sidebar-overlay d-md-none" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}

export default Sidebar;
