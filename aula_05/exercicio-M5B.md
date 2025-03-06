# Exercício

```
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
``` 

De acordo com o exemplo acima, vocês devem fazer uma chamada a API de produtos e retornar um card para cada produto, com as seguintes informações:
    - título
    - descrição
    - preço
    - imagem

[Documentação da API](https://dummyjson.com/docs/products)

[URL da API](https://dummyjson.com/products)