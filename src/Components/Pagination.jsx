const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="flex gap-4 mt-8 items-center text-sm sm:text-base text-white">
      <button
        onClick={() => setPage(prev => prev - 1)}
        disabled={page === 1}
        className="bg-gray-700 px-4 py-2 rounded disabled:opacity-50"
      >
        Previous
      </button>

      <span>
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