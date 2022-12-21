import React, { useContext, useState } from "react";
import faker from "faker";
import SingleProducts from "./SingleProducts";
import { Cart } from "../Context";

faker.seed(100);

const Home = () => {
  

  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));
  console.log(productArray);

  const [products] = useState(productArray);
  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProducts
          prod={prod}
          
          key={prod.id}
        />
      ))}
    </div>
  );
};

export default Home;
