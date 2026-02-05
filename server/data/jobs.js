const jobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Nexus Labs",
    category: "Development",
    location: "Remote",
    level: "Mid-Level",
    description: "Build and maintain modern React interfaces."
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "CloudCore",
    category: "Development",
    location: "Lagos",
    level: "Senior",
    description: "Develop scalable REST APIs using Node.js."
  },
  {
    id: "3",
    title: "UI/UX Designer",
    company: "DesignHub",
    category: "Design",
    location: "Abuja",
    level: "Entry-Level",
    description: "Create user-centered digital experiences."
  },
  {
    id: "4",
    title: "Product Manager",
    company: "TechBridge",
    category: "Product",
    location: "Remote",
    level: "Mid-Level",
    description: "Coordinate cross-functional product development."
  },
  {
    id: "5",
    title: "Mobile App Developer",
    company: "Appify",
    category: "Development",
    location: "Port Harcourt",
    level: "Mid-Level",
    description: "Build cross-platform mobile apps using React Native."
  },

  // -------- Development --------
  ...Array.from({ length: 15 }, (_, i) => ({
    id: `${6 + i}`,
    title: "Software Engineer",
    company: `TechCorp ${i + 1}`,
    category: "Development",
    location: i % 2 === 0 ? "Remote" : "Lagos",
    level: i % 3 === 0 ? "Senior" : "Mid-Level",
    description: "Work on scalable web applications."
  })),

  // -------- Design --------
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `${21 + i}`,
    title: "Graphic / UI Designer",
    company: `Creative Studio ${i + 1}`,
    category: "Design",
    location: i % 2 === 0 ? "Abuja" : "Remote",
    level: i % 2 === 0 ? "Entry-Level" : "Mid-Level",
    description: "Design digital products and branding assets."
  })),

  // -------- Marketing --------
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `${31 + i}`,
    title: "Digital Marketer",
    company: `MarketPlus ${i + 1}`,
    category: "Marketing",
    location: "Remote",
    level: i % 2 === 0 ? "Entry-Level" : "Mid-Level",
    description: "Plan and execute online marketing campaigns."
  })),

  // -------- Product / Ops --------
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `${41 + i}`,
    title: "Operations / Product Associate",
    company: `StartupHub ${i + 1}`,
    category: "Product",
    location: "Lagos",
    level: "Entry-Level",
    description: "Support product and operational workflows."
  }))
];

module.exports = jobs;
