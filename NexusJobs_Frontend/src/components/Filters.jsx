import SearchIcon from "./ui/icons/SearchIcon";
import LocationIcon from "./ui/icons/LocationIcon";
import JobTypeIcon from "./ui/icons/JobTypeIcon";

export default function Filters({ filters, setFilters }) {

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md space-y-4">

      {/* Search */}
      <div className="flex items-center gap-2 border dark:border-gray-700 rounded-lg px-3 py-2">
        <SearchIcon className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          name="search"
          placeholder="Search jobs..."
          value={filters.search}
          onChange={handleChange}
          className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100"
        />
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 border dark:border-gray-700 rounded-lg px-3 py-2">
        <LocationIcon className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleChange}
          className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100"
        />
      </div>

      {/* Job Type */}
      <div className="flex items-center gap-2 border dark:border-gray-700 rounded-lg px-3 py-2">
        <JobTypeIcon className="w-5 h-5 text-gray-400" />
        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100"
        >
          <option value="">All Types</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Remote">Remote</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

    </div>
  );
}
