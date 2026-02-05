import React, { useContext } from "react";
import { JobContext } from "../context/JobContext";
import JobCard from "../components/JobCard";
import Filters from "../components/Filters";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import { filterJobs } from "../utils/filterJobs";

function Home() {
  const { jobs, loading, error, filters } = useContext(JobContext);

  const filteredJobs = filterJobs(jobs, filters);

  if (loading) return <Loader />;
  if (error) return <ErrorState message={error} />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <Filters />
      {filteredJobs.length === 0 ? (
        <div className="text-center text-gray-600 py-10">
          No jobs match your filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
