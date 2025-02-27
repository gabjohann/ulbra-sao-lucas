import "./styles.css";

export function Button({ title }) {
  return (
    <button type="button" className="darkButton">
      {title}
    </button>
  );
}
