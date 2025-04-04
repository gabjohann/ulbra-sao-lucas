import { Header } from "./components/header";
import { Form } from "./components/form";
import { Product } from "./components/product";

import shoopingList from "../data.json";

export function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Form />

        <div className="product-list">
          {shoopingList.lista_de_compras.map(
            /* desestruturação */
            ({ nome, quantidade, tipo }, index) => (
              <Product
                key={index}
                productName={nome}
                quantity={quantidade}
                type={tipo}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
