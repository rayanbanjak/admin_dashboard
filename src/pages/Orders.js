import { useState, useEffect } from "react";
import ordersData from "../data/Orders";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

function Orders() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredOrders = ordersData.filter((order) =>
    order.customer.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return <span className="badge bg-success">Completed</span>;
      case "Pending":
        return <span className="badge bg-warning text-dark">Pending</span>;
      case "Processing":
        return <span className="badge bg-info text-dark">Processing</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-dark fw-bold">Orders History</h2>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="table-responsive table-container mt-3">
        <table className="table table-striped table-hover mb-0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Product Purchased</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th style={{ width: "160px" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td className="fw-semibold">{order.customer}</td>
                <td>{order.product}</td>
                <td className="fw-semibold">${order.total.toFixed(2)}</td>
                <td>{getStatusBadge(order.status)}</td>

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

export default Orders;