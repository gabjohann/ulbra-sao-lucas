import { useState } from "react";
import { Plus } from "lucide-react";
import { Category, categories } from "../category";
import "./styles.css";

/* export function Form({ onSearch }) { 
  const [input, setInput] = useState("");

function handleChange(e) {
  const value = e.target.value;
  setInput(value);
  onSearch(value); // chamando a função recebida como prop
  } */

export function Form({ onAddProduct }) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [tipo, setTipo] = useState("un.");
  const [categoria, setCategoria] = useState(categories[0]);

  function handleSubmit(e) {
    e.preventDefault();

    if (nome.trim() === "") return;

    onAddProduct({
      nome,
      quantidade,
      tipo,
      categoria,
    });

    setNome("");
    setQuantidade(1);
    setTipo("un.");
    setCategoria(categories[0]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="item-input">
        <label htmlFor="item">Item</label>
        <input
          type="text"
          className="item"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="item-input">
        <label htmlFor="quantity">Quantidade</label>
        <div className="quantity-input-container">
          <input
            type="number"
            className="quantity-input"
            min={1}
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
          />
          <select
            className="unit-select"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="un.">Un.</option>
            <option value="L">L</option>
            <option value="Kg">Kg</option>
          </select>
        </div>
      </div>

      <div className="item-input">
        <label htmlFor="category">Categoria</label>
        <Category
          selectedCategory={categoria}
          onChange={(cat) => setCategoria(cat)}
        />
      </div>

      <button type="submit">
        <Plus size={24} />
      </button>
    </form>
  );
}
