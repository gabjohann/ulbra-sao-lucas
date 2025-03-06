import { useState, useEffect } from "react";

export function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setUsuario(data));
  }, []);

  if (!usuario) return <div>Carregando...</div>;

  return (
    <div>
      <h1>{usuario.name}</h1>
      <p>Email: {usuario.email}</p>
    </div>
  );
}
