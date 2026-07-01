import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
   
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{ backgroundColor: "#659287" }}>
      <div className="container-fluid">

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