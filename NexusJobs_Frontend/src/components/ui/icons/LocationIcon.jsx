import IconBase from "./IconBase";

export default function LocationIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 21s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </IconBase>
  );
}
