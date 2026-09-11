import { styles } from "./styles";

export default function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  suffix = "",
  onReset,
}) {
  return (
    <label style={styles.control}>
      <div style={styles.controlHeader}>
        <span>{label}</span>
<div style={styles.rotationValueGroup}>
  <span style={styles.value}>
    {value}{suffix}
  </span>

  {onReset && (
    <button
      type="button"
      style={styles.rotationReset}
      onClick={(event) => {
        event.preventDefault();
        onReset();
      }}
      aria-label={`Reset ${label}`}
      title={`Reset ${label}`}
    >
      ↺
    </button>
  )}
</div>
      </div>

<input
  type="range"
  value={value}
  min={min}
  max={max}
  step={step}
  onChange={(event) =>
    onChange(Number(event.target.value))
  }
  className="shader-slider"
/>
    </label>
  );
}