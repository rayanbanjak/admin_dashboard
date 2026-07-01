import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-2 p-0">
              <Sidebar />
            </div>
            <div className="col-md-9 col-lg-10 p-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </div>
          </div>
          </div>
        </div>

        <Footer />
      
    </BrowserRouter>
  );
}

export default App;