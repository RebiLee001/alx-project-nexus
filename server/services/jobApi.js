export const fetchJobs = async () => {
  const response = await fetch("http://localhost:5000/api/jobs");

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return response.json();
};
