import React from "react";
import MyNavBar from "../components/NavBar";
import "./Home.css";
import FrontCard from "../components/FrontCard";

const Home = () => {
  return (
    //The navbar goes first
    <div style={{ width: "100%", height: '100%' }}>
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
        <FrontCard label = "Electronics" />
        <FrontCard  label = "Fashion" />
        <FrontCard label = "Appliances" />
        <FrontCard label = "Accessories" />
      </div>
    </div>
  );
};

export default Home;
