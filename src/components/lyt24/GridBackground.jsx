export default function GridBackground({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 grid-pattern ${className}`}
      aria-hidden="true"
    />
  );
}
