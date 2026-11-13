/**
 * Stat Component
 * Small reusable stat item displaying a numeric metric and its description.
 */
export default function Stat({ value, label }) {
  return (
    <div className="tapas-stat">
      <div className="tapas-stat__value">{value}</div>
      <div className="tapas-stat__label">{label}</div>
    </div>
  );
}
