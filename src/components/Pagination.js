function Pagination({ currentPage, setCurrentPage, totalPages }) {
  return (
    <div className="d-flex justify-content-center mt-3">
      <button
        className="btn btn-secondary me-2"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}>
        Previous
      </button>
      <span className="align-self-center">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="btn btn-secondary ms-2"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}>
        Next
      </button>

    </div>
  );
}

export default Pagination;