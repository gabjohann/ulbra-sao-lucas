import "./style.css";

export function Card({ description, title, price }) {
  return (
    <div className="container">
      <p>{description}</p>

      <div>
        <h1>{title}</h1>
        <span>
          R$ <strong>{price}/mês</strong>
        </span>
      </div>
    </div>
  );
}
