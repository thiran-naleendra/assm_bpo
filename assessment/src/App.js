import React, { useState, useEffect } from "react";
import Card from "./components/card";

const App = () => {
  const [products, setProducts] = useState([]);
  // const [name, setName] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db");
      const data = await response.json();
      setProducts(data.products);
      console.log(data.products)
      // setName(data.products.product.name)
    };
    fetchData();
  }, []);

  return (
    <div>
      <Card/>
      <h2>Product List</h2>
      
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} 
            {product.description}
            {product.price}
            {product.status}
            {product.rating}
            {product.ratedBy}
            {product.image}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;