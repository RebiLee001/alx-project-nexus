import IconBase from "./IconBase";

export default function JobTypeIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </IconBase>
  );
}
