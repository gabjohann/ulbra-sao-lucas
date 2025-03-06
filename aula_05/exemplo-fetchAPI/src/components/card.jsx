function Product({ product }) {
    return (
      <div>
        <img src={product.thumbnail} alt={product.title}/>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>Stock: {product.stock}</p>
      </div>
    );
  }
