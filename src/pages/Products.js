import { useState, useEffect } from "react";
import productsData from "../data/Products";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

function Products() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const getCategoryBadge = (category) => {
    switch (category) {
      case "Electronics":
        return <span className="badge" style={{ backgroundColor: "#215E61", color: "#ffffff" }}>Electronics</span>;
      case "Furniture":
        return <span className="badge text-dark" style={{ backgroundColor: "#FF9E20" }}>Furniture</span>;
      case "Accessories":
        return <span className="badge" style={{ backgroundColor: "#BE1A1A", color: "#ffffff" }}>Accessories</span>;
      default:
        return <span className="badge bg-secondary">{category}</span>;
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-dark fw-bold">Products Inventory</h2>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="table-responsive table-container mt-3">
        <table className="table table-striped table-hover mb-0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th style={{ width: "160px" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td className="fw-semibold">{product.name}</td>
                <td>
                  {getCategoryBadge(product.category)}
                </td>
                <td className="fw-semibold text-success">${product.price.toFixed(2)}</td>

                <td>
                  <button className="btn btn-warning btn-sm me-2 fw-semibold" >
                    Edit
                  </button>

                  <button className="btn btn-danger btn-sm fw-semibold" >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Products;