import React, { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db");
      const data = await response.json();
      setProducts(data.products);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} ({product.price} {product.currency})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;