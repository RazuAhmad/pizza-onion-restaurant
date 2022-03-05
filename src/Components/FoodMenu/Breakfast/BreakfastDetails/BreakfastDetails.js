import React from "react";
import { Link } from "react-router-dom";
import "./BreakfastDetails.css";
const BreakfastDetails = ({ singleFoodItem }) => {
  const { price, foodName, foodImg, id } = singleFoodItem;
  return (
    <Link style={{ textDecoration: "none" }} to={"/DetailView/" + id}>
      <div className="breakfastDetails">
        <img style={{ width: "45%" }} src={foodImg} alt="" />
        <br />
        <h4>{foodName}</h4>
        <p>How we dream about our future</p>
        <h3>{price}</h3>
      </div>
    </Link>
  );
};

export default BreakfastDetails;
