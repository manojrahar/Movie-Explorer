const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="flex gap-6 mt-8 items-center">
      <button
        onClick={() => setPage(prev => prev - 1)}
        disabled={page === 1}
        className="bg-gray-700 px-4 py-2 rounded disabled:opacity-50"
      >
        Previous
      </button>

      <span className="text-white">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => setPage(prev => prev + 1)}
        disabled={page === totalPages}
        className="bg-gray-700 px-4 py-2 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;