import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getJobById } from "../services/jobApi";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await getJobById(id);
        setJob(data);
      } catch (err) {
        setError("Job not found.");
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorState message={error} />;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
      <p className="text-gray-600 mt-1">{job.company} • {job.location}</p>
      <p className="mt-2 text-gray-500">{job.level} • {job.category}</p>
      <p className="mt-4 text-gray-700">{job.description}</p>
      <Link to={`/apply/${job.id}`}>
        <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
          Apply Now
        </button>
      </Link>
    </div>
  );
}

export default JobDetails;
