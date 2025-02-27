import { Button } from "../button";
import { ItemList } from "../item-list";
import "./styles.css";

export function Card({
  description,
  title,
  price,
  darkMode = false,
  features,
}) {
  return (
    <div className={`container ${darkMode ? "darkContainer" : ""}`}>
      <p id="description">{description}</p>
      <div className="details">
        <h1>{title}</h1>
        <p>
          R$
          <strong>
            {price}
            <span>/mês</span>
          </strong>
        </p>
      </div>

      <Button title="Assinar agora" />

      <hr />

      <ul>
        {features &&
          features.map((item, index) => (
            <ItemList key={index} functionality={item} />
          ))}
      </ul>
    </div>
  );
}
