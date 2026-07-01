import { useState, useEffect } from "react";
import usersData from "../data/Users";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

function Users() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h2 className="mb-4 text-dark fw-bold">Users Directory</h2>

      <SearchBar
        search={search}
        setSearch={setSearch} />

      <div className="table-responsive table-container mt-3">
        <table className="table table-striped table-hover mb-0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th style={{ width: "160px" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td className="fw-semibold">{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`badge ${user.role === 'Admin' ? 'bg-primary' : user.role === 'Manager' ? 'bg-info' : 'bg-secondary'}`}>
                    {user.role}
                  </span>
                </td>

                <td>
                  <button className="btn btn-warning btn-sm me-2 fw-semibold">
                    Edit
                  </button>

                  <button className="btn btn-danger btn-sm fw-semibold">
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

export default Users;