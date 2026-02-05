/**
 * Filters job listings based on category, location, and experience level
 * @param {Array} jobs - Array of job objects
 * @param {Object} filters - Active filter values
 * @returns {Array} - Filtered job list
 */

export const filterJobs = (jobs, filters) => {
  if (!jobs || jobs.length === 0) return [];

  const { category, location, level } = filters;

  return jobs.filter((job) => {
    const matchesCategory =
      !category || job.category?.toLowerCase() === category.toLowerCase();

    const matchesLocation =
      !location || job.location?.toLowerCase().includes(location.toLowerCase());

    const matchesLevel =
      !level || job.level?.toLowerCase() === level.toLowerCase();

    return matchesCategory && matchesLocation && matchesLevel;
  });
};
