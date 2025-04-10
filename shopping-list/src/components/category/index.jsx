import { useState } from "react";
import {
  Sandwich,
  Carrot,
  Beef,
  Apple,
  Milk,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import "./styles.css";

const categories = [
  { name: "Padaria", icon: Sandwich, color: "#bb9f3a" },
  { name: "Legume", icon: Carrot, color: "#8cad51" },
  { name: "Carne", icon: Beef, color: "#db5bbf" },
  { name: "Fruta", icon: Apple, color: "#e07b67" },
  { name: "Bebida", icon: Milk, color: "#7b94cb" },
];

export function Category({ selectedCategory, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="select-container">
      <div className="select-box" onClick={() => setOpen(!open)}>
        <div className="category">
          <span className="icon">
            <selectedCategory.icon size={16} color={selectedCategory.color} />
          </span>
          <span>{selectedCategory.name}</span>
        </div>
        <span className="arrow">{open ? <ChevronUp /> : <ChevronDown />}</span>
      </div>

      {open && (
        <ul className="options-list">
          {categories.map((category, i) => (
            <li
              key={i}
              className="option"
              onClick={() => {
                onChange(category);
                setOpen(false);
              }}
            >
              <span className="icon">
                <category.icon size={16} color={category.color} />
              </span>
              <span>{category.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { categories };
