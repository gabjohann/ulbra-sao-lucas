import { Button } from "../button";
import { ItemList } from "../item-list";
import "./styles.css";

export function Card({ description, title, price }) {
  const ultimate = [
    "usuários ilimitados",
    "suporte 24/7",
    "CSM dedicado",
    "treinamentos",
  ];

  return (
    <div className="container darkContainer">
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
        {ultimate.map((item, index) => (
          <ItemList key={index} functionality={item} />
        ))}
      </ul>
    </div>
  );
}
