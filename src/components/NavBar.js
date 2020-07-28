import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const MyNavbar = (props) => {
  return (
    <AppBar position="static" variant="elevation">
      <div className="Container">
        <Toolbar>
          <Typography variant="h4">Shop-App</Typography>
          <div style={{ marginLeft: 20,flex: 1, alignSelf: 'center' }}>
              <Link
                to="/"
                style={{
                  color: "white",
                  marginRight: 10,
                  fontWeight: "bold",
                  fontSize: 20,
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
                  fontSize: 20,
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
                  fontSize: 20,
                }}
              >
                Profile
              </Link>
              {/* <Button color = "inherit">
                  Login
              </Button> */}
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default MyNavbar;
