import LocationIcon from "./ui/icons/LocationIcon";
import ExperienceIcon from "./ui/icons/ExperienceIcon";
import JobTypeIcon from "./ui/icons/JobTypeIcon";
import ApplyIcon from "./ui/icons/ApplyIcon";

export default function JobCard({ job }) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-5 transition hover:shadow-lg">

      {/* Job Title */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {job.title}
      </h3>

      {/* Company */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {job.company}
      </p>

      {/* Job Meta */}
      <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">

        <div className="flex items-center gap-2">
          <LocationIcon className="w-4 h-4" />
          {job.location}
        </div>

        <div className="flex items-center gap-2">
          <ExperienceIcon className="w-4 h-4" />
          {job.experience}
        </div>

        <div className="flex items-center gap-2">
          <JobTypeIcon className="w-4 h-4" />
          {job.type}
        </div>

      </div>

      {/* Apply Button */}
      <button className="mt-4 w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition">
        <ApplyIcon className="w-4 h-4" />
        Apply Now
      </button>
    </div>
  );
}
