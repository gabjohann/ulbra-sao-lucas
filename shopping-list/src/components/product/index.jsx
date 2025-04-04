import {
  Apple,
  Sandwich,
  Carrot,
  Milk,
  Beef,
  EllipsisVertical,
} from "lucide-react";

import "./styles.css";

const icons = {
  fruta: Apple,
  padaria: Sandwich,
  legume: Carrot,
  bebida: Milk,
  carne: Beef,
};

export function Product({ productName, quantity, type }) {
  const Icon = icons[type] || Apple;

  return (
    <div className="card-product">
      <div className="details">
        <p>{productName}</p>
        <span>{quantity}</span>
      </div>

      <div className="category">
        <p className={`tag ${type}`}>
          <Icon size={16} />
          {type}
        </p>
        <EllipsisVertical size={20} color="#A881E6" />
      </div>
    </div>
  );
}
