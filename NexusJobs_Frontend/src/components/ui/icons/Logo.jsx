export default function Logo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-2 font-bold ${className}`}>
      <span
        className="
          text-purple-600
          dark:text-purple-400
          text-xl
        "
      >
        Nexus
      </span>
      <span
        className="
          text-gray-900
          dark:text-gray-100
          text-xl
        "
      >
        Jobs
      </span>
    </div>
  );
}
