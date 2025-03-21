import logoImg from "./assets/logo.svg";
import { Card } from "./components/card";
import laCumaImg from "./assets/la-cuma.png";
import localImg from "./assets/local.png";

export function App() {
  return (
    <>
      <div className="container">
        <img src={logoImg} alt="La Pizza Pedaço da Itália" className="logo" />
      </div>

      <div className="products-container">
        <h1 className="title">Mais vendidas</h1>

        <div className="products">
          <Card
            imgUrl={laCumaImg}
            name="La Cuma"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            price="29,90"
          />
          <Card
            imgUrl={laCumaImg}
            name="La Cuma"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            price="29,90"
          />
          <Card
            imgUrl={laCumaImg}
            name="La Cuma"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            price="29,90"
          />
          <Card
            imgUrl={laCumaImg}
            name="La Cuma"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            price="29,90"
          />
        </div>
      </div>

      <div className="about">
        <img src={localImg} alt="" />

        <div className="description">
          <p className="d-title">
            Sobre a La P<span>i</span>
            <span>z</span>
            <span>z</span>a
          </p>

          <p className="history">
            Bem-vindo ao "La Pizza", o seu refúgio acolhedor para uma
            experiência de pizzaria autêntica. Em nosso pequeno oásis italiano,
            cada pedaço de pizza é uma obra-prima artesanal. Sinta-se em casa
            enquanto o aroma sedutor de massa fresca assa no forno, criando as
            pizzas mais deliciosas da cidade.
          </p>

          <button type="button">ler mais sobre</button>
        </div>
      </div>
    </>
  );
}
