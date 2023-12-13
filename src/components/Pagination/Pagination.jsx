import React from "react";

const Pagination = ({ currentPage, totalPages, setPage }) => {
  if (totalPages === 0) return null;

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="mb-5 flex items-center justify-center">
      <button
        className="me-3 flex h-8 items-center justify-center rounded-lg bg-[#bb06df] px-3 text-sm text-white hover:bg-[#7b0592] shadow-lg shadow-[#bb06df]"
        onClick={handlePrev}
      >
        Previous
      </button>
      <button
        className="me-3 flex h-8 items-center justify-center rounded-lg bg-[#bb06df] px-3 text-sm text-white hover:bg-[#7b0592] shadow-lg shadow-[#bb06df]"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
