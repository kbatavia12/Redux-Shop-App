import React from "react";
import "./FrontCard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getNavigatorState } from "../actions";
import ProductList from "../screens/ProductList";

const FrontCard = (props) => {
  const dispatch = useDispatch();

  return (
    <div id={props.id} className="Card-Container">
      <div className="Head-Label-Div">
        <p className="Head-Label">{props.label}</p>
      </div>
      <div className="Main-Image-Container">
        <div className="Image-Container">
          <div className="Small-Image-Container">
            <Link

              onClick={() =>
                dispatch(
                  getNavigatorState({
                    domain: props.label,
                    subdomain: props.image1Label,
                  })
                )
              }
              to={`/productfinder/${props.label}/${props.image1Label}`}
            >
              <img className="Small-Images" src={props.image1}></img>
            </Link>
            <Link


              onClick={() =>
                dispatch(
                  getNavigatorState({
                    domain: props.label,
                    subdomain: props.image2Label,
                  })
                )
              }
              to={`/productfinder/${props.label}/${props.image2Label}`}
            >
              {" "}
              <img className="Small-Images" src={props.image2}></img>
            </Link>
          </div>

          <div className="Label-Container">
            <p className="Image-Labels">{props.image1Label}</p>
            <p className="Image-Labels">{props.image2Label}</p>
          </div>
        </div>

        <div className="Image-Container">
          <div className="Small-Image-Container">
            <Link


              onClick={() =>
                dispatch(
                  getNavigatorState({
                    domain: props.label,
                    subdomain: props.image3Label,
                  })
                )
              }
              to={`/productfinder/${props.label}/${props.image3Label}`}
            >
              {" "}
              <img className="Small-Images" src={props.image3}></img>
            </Link>
            <Link


              onClick={() =>
                dispatch(
                  getNavigatorState({
                    domain: props.label,
                    subdomain: props.image4Label,
                  })
                )
              }
              to={`/productfinder/${props.label}/${props.image4Label}`}
            >
              {" "}
              <img className="Small-Images" src={props.image4}></img>
            </Link>
          </div>

          <div className="Label-Container">
            <p className="Image-Labels">{props.image3Label}</p>
            <p className="Image-Labels">{props.image4Label}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
