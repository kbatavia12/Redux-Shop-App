import React from "react";
import MyNavBar from "../components/NavBar";
import "./Home.css";
import FrontCard from "../components/FrontCard";

const Home = () => {
  return (
    //The navbar goes first
    <div style={{ width: "100%", height: "100%" }}>
      <div>
        <MyNavBar />
      </div>
      <div className="ImageContainer">
        <img src="https://picsum.photos/1000/300" className="Front-Image"></img>
      </div>

      <div
        style={{
          position: "absolute",
          marginTop: "-2%",
          width: "100%",
          height: "500px",
          marginTop: "-10%",
          alignContent: "center",
          marginLeft: "4%",
        }}
      >
        <FrontCard
          image1Label="iPhone"
          image2Label="Laptops"
          image3Label="Speakers"
          image4Label="Samsung"
          image1="https://picsum.photos/1000/300/"
          image2="https://picsum.photos/200/300"
          image3="https://picsum.photos/400/300"
          image4="https://picsum.photos/600/300"
          label="Electronics"
        />
        <FrontCard
          image1Label="Tees"
          image2Label="Women's wear"
          image3Label="Men's wear"
          image4Label="Kids"
          image1="https://picsum.photos/1000/400/"
          image2="https://picsum.photos/200/500"
          image3="https://picsum.photos/400/600"
          image4="https://picsum.photos/600/700"
          label="Fashion"
        />
        <FrontCard
          image1Label="Kitchen"
          image2Label="Pans"
          image3Label="Cookers"
          image4Label="Utensils"
          image1="https://picsum.photos/300/200/"
          image2="https://picsum.photos/1000/500"
          image3="https://picsum.photos/100/500"
          image4="https://picsum.photos/500/100"
          label="Appliances"
        />
        <FrontCard
          image1Label="USB Cables"
          image2Label="Powerbanks"
          image3Label="Mobile covers"
          image4Label="Headphones"
          image1="https://picsum.photos/1000/700/"
          image2="https://picsum.photos/200/900"
          image3="https://picsum.photos/400/1000"
          image4="https://picsum.photos/600/1000"
          label="Accessories"
        />
      </div>
    </div>
  );
};

export default Home;
