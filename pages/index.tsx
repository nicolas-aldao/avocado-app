import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";

const HomePage = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, length})=> {
        setProductList(data)
      });
  }, []);

  return (
    <>
      <Navbar />
      <div>ye2.</div>
      {productList.map(prod => {
        return <div>{prod.name}</div>
      })}
    </>
  );
};

export default HomePage;
