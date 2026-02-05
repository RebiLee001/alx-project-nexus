import { filterJobs } from "./filterJobs";

const mockJobs = [
  {
    id: "1",
    title: "Frontend Developer",
    category: "Development",
    location: "Remote",
    level: "Mid-Level",
  },
  {
    id: "2",
    title: "Backend Developer",
    category: "Development",
    location: "Lagos",
    level: "Senior",
  },
  {
    id: "3",
    title: "UI Designer",
    category: "Design",
    location: "Remote",
    level: "Entry-Level",
  },
];

describe("filterJobs utility", () => {
  test("returns all jobs when no filters are applied", () => {
    const result = filterJobs(mockJobs, {});
    expect(result.length).toBe(3);
  });

  test("filters by category", () => {
    const result = filterJobs(mockJobs, { category: "Design" });
    expect(result.length).toBe(1);
    expect(result[0].title).toBe("UI Designer");
  });

  test("filters by location", () => {
    const result = filterJobs(mockJobs, { location: "Remote" });
    expect(result.length).toBe(2);
  });

  test("filters by experience level", () => {
    const result = filterJobs(mockJobs, { level: "Senior" });
    expect(result.length).toBe(1);
    expect(result[0].title).toBe("Backend Developer");
  });

  test("filters by multiple criteria", () => {
    const result = filterJobs(mockJobs, {
      category: "Development",
      location: "Remote",
    });
    expect(result.length).toBe(1);
    expect(result[0].title).toBe("Frontend Developer");
  });

  test("returns empty array if no jobs match", () => {
    const result = filterJobs(mockJobs, {
      category: "Marketing",
    });
    expect(result.length).toBe(0);
  });
});
