import React from "react";
import "./DetailCard.css";

const DetailCard = (props) => {
  return (
    <div className="Detail-Card">
      <p className="Label">{props.label}</p>
      <p className="Description">{props.description}</p>
    </div>
  );
};

export default DetailCard;
