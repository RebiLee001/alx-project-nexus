import IconBase from "./IconBase";

export default function ExperienceIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </IconBase>
  );
}
