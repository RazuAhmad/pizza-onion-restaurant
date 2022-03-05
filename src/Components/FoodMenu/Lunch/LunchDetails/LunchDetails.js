import React from "react";
import { Link } from "react-router-dom";

const LunchDetails = ({ singleFoodItem }) => {
  const { id, price, foodName, foodImg } = singleFoodItem;
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

export default LunchDetails;
