import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MyNavBar from "../components/NavBar";
import "./ProductList.css";
import { getNavigatorState } from "../actions";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  let domain = useSelector((state) => state.finderState.domain);
  let subdomain = useSelector((state) => state.finderState.subdomain);
  const url = window.location.href;
  const dispatch = useDispatch();

  const extractURLCredentials = (url) => {
    return url.split("/");
  };

  useEffect(() => {
    const splitArr = extractURLCredentials(url);
    dispatch(
      getNavigatorState({ domain: splitArr[4], subdomain: splitArr[5] })
    );

    return () => {
      dispatch(getNavigatorState({}));
    };
  }, []);

  return (
    <div className="Screen-Container">
      <div>
        <MyNavBar />
      </div>

      <div className="Search-Text-Container">
        <h3 style={{ float: "left", marginRight: "5px" }}>Searching for</h3>
        <h3 style={{ float: "left", color: "#477979" }}>{subdomain}</h3>
      </div>

	 <div className = "Background-Div"> 

	 </div>	


	  <div  className = "Product-Card-Container" >
	  <ProductCard
          height="350px"
          productName="iPhone"
          image="https://picsum.photos/500/300"
        />
        <ProductCard
          height="250px"
          productName="iPhone"
          image="https://picsum.photos/500/200"
        />
        <ProductCard
          height="350px"
          productName="iPhone"
          image="https://picsum.photos/500/300"
        />
        <ProductCard
          height="250px"
          productName="iPhone"
          image="https://picsum.photos/500/200"
        />
        <ProductCard
          height="350px"
          productName="iPhone"
          image="https://picsum.photos/500/300"
        />
        <ProductCard
          height="350px"
          productName="iPhone"
          image="https://picsum.photos/500/300"
        />
        <ProductCard
          height="250px"
          productName="iPhone"
          image="https://picsum.photos/500/200"
        />
        <ProductCard
          height="350px"
          productName="iPhone"
          image="https://picsum.photos/500/300"
        />
        <ProductCard
          height="350px"
          productName="iPhone"
          image="https://picsum.photos/500/300"
        />
        <ProductCard
          height="250px"
          productName="iPhone"
          image="https://picsum.photos/500/200"
        />
        <ProductCard
          height="350px"
          productName="iPhone"
          image="https://picsum.photos/500/300"
        />
        <ProductCard
          height="350px"
          productName="iPhone"
          image="https://picsum.photos/500/300"
        />
        <ProductCard
          height="250px"
          productName="iPhone"
          image="https://picsum.photos/500/200"
        />
        <ProductCard
          height="350px"
          productName="iPhone"
          image="https://picsum.photos/500/300"
        />
        <ProductCard
          height="350px"
          productName="iPhone"
          image="https://picsum.photos/500/300"
        />
        <ProductCard
          height="250px"
          productName="iPhone"
          image="https://picsum.photos/500/200"
        />
        <ProductCard
          height="350px"
          productName="iPhone"
          image="https://picsum.photos/500/300"
        />
        <ProductCard
          height="350px"
          productName="iPhone"
          image="https://picsum.photos/500/300"
        />
        <ProductCard
          height="250px"
          productName="iPhone"
          image="https://picsum.photos/500/200"
        />
        <ProductCard
          height="350px"
          productName="iPhone"
          image="https://picsum.photos/500/300"
        />
        <ProductCard
          height="350px"
          productName="iPhone"
          image="https://picsum.photos/500/300"
        />
        <ProductCard
          height="250px"
          productName="iPhone"
          image="https://picsum.photos/500/200"
        />
        <ProductCard
          height="350px"
          productName="iPhone"
          image="https://picsum.photos/500/300"
        />
	  </div>	



      
    </div>
  );
};

export default ProductList;
