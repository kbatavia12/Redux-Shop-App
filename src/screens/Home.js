import React from "react";
import MyNavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const Home = () => {
  return (
    //The navbar goes first
    <div>
      <div>
        <MyNavBar />
      </div>
      <div>
        <h1>Home Screen</h1>
      </div>
    </div>
  );
};

export default Home;
