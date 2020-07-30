import React from "react";
import { useSelector } from "react-redux";
import MyNavBar from "../components/NavBar";
import "./ProductList.css";

const ProductList = () => {
  const domain = useSelector((state) => state.finderState.domain);
  const subdomain = useSelector((state) => state.finderState.subdomain);

  const Heading = () => {
      return (
          <h2 className = {'Sub-Domain'} >{subdomain}</h2>
      );
  } 

  return (
    <div>
      <div>
        <MyNavBar />
      </div>
    </div>
  );
};

export default ProductList;
