import { ShoppingCart } from "lucide-react";
import "./styles.css";

export function Card({ coffeeImg, tags, title, description }) {
  return (
    <div id="card">
      <img src={coffeeImg} alt={title} id="coffeeImg" />
      {tags.map((tag, index) => (
        <div className="tag">
          <span key={index}>{tag}</span>
        </div>
      ))}

      <h1>{title}</h1>
      <p className="description">{description} </p>

      <div id="details">
        <div className="price">
          <p>
            R$ <strong>9,90</strong>
          </p>
        </div>

        <div id="quantityButtons">
          <button type="button">-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <button type="button" className="shoppingBtn">
          <ShoppingCart color="#F3F2F2" fill="#F3F2F2" size={20} />
        </button>
      </div>
    </div>
  );
}
