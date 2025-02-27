import { Check, Info } from "lucide-react";
import "./styles.css";

export function ItemList({ functionality }) {
  return (
    <li>
      <div>
        <Check size={20} color="#04D361" />
        {functionality}
      </div>
      <Info size={20} color="#64748B" />
    </li>
  );
}
