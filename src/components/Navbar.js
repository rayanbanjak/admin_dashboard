import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ toggleSidebar }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
   
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm theme-navbar">
      <div className="container-fluid">

        <button
          className="btn btn-link text-white d-md-none me-2 p-0 border-0"
          type="button"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4.1a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </button>

        <Link className="navbar-brand fw-bold" to="/">
          Admin Dashboard
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <span className="nav-link fw-semibold text-white">Welcome Admin</span>
            </li>

            <li className="nav-item">
              <button className="btn btn-danger btn-sm ms-lg-3 mt-2 mt-lg-0">
                Logout
              </button>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;