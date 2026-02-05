const API_URL = "http://localhost:5000/jobs"; // Node + Express API

export const fetchJobs = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch jobs");
  return response.json();
};

export const getJobById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error("Job not found");
  return response.json();
};

export const applyJob = async (id, applicationData) => {
  const response = await fetch(`${API_URL}/${id}/apply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(applicationData),
  });
  if (!response.ok) throw new Error("Failed to apply");
  return response.json();
};
