import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./NavBar.css";
import { Link } from "react-router-dom";

const MyNavbar = (props) => {
  return (
      <div className="Container">
        <AppBar position="static" variant="elevation" style = {{backgroundColor: '#477979', width: '100%'}} >
        <Toolbar>
          <p className = "Title">Shop-App</p>
          <div style={{ marginLeft: 20,flex: 1, alignSelf: 'center' }}>
              <Link
                to="/"
                style={{
                  color: "white",
                  marginRight: 10,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Home
              </Link>
              <Link
                to="/cart"
                style={{
                  color: "white",
                  marginRight: 10,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Cart
              </Link>
              <Link
                to="/profile"
                style={{
                  color: "white",
                  marginRight: 10,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Profile
              </Link>
              {/* <Button color = "inherit">
                  Login
              </Button> */}
          </div>
        </Toolbar>
    </AppBar>
      </div>
  );
};

export default MyNavbar;
