import React, { useContext } from "react";
import { JobContext } from "../context/JobContext";

function SearchBar() {
  const { filters, setFilters } = useContext(JobContext);

  const handleSearch = (e) => {
    setFilters({ ...filters, location: e.target.value });
  };

  return (
    <input
      type="text"
      placeholder="Search by location or keyword"
      value={filters.location}
      onChange={handleSearch}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none mb-6"
    />
  );
}

export default SearchBar;
