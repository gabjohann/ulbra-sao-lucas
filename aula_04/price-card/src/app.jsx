import { Card } from "./components/card";

export function App() {
  return (
    <>
      <Card
        description="para você começar"
        title="Essentials"
        price="19,97"
        darkMode
        features={[
          "usuários ilimitados",
          "suporte 24/7",
          "CSM dedicado",
          "treinamentos",
        ]}
      />
    </>
  );
}
