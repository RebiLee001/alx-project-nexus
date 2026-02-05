import React, { createContext, useState, useEffect } from "react";
import { fetchJobs } from "../services/jobApi";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ category: "", location: "", level: "" });

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);
        const data = await fetchJobs();
        setJobs(data);
      } catch (err) {
        setError("Failed to load jobs.");
      } finally {
        setLoading(false);
      }
    };
    loadJobs();
  }, []);

  return (
    <JobContext.Provider value={{ jobs, loading, error, filters, setFilters }}>
      {children}
    </JobContext.Provider>
  );
};
