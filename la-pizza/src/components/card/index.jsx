import { Heart } from "lucide-react";
import "./styles.css";

export function Card({ imgUrl, name, description, price }) {
  return (
    <div className="card">
      <img src={imgUrl} alt={name} className="product-img" />
      <div className="fav-btn">
        <Heart size={18} color="#FF3536" fill="#FF3536" className="fav-icon" />
      </div>

      <div className="product-details">
        <h1>{name}</h1>
        <p>{description}</p>
        <strong>R$ {price}</strong>
      </div>
      <button type="button" className="checkout-btn">
        Comprar agora
      </button>
    </div>
  );
}
