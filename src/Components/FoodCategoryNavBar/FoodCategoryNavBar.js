import React from "react";
import { Link } from "react-router-dom";
import "./FoodCategoryNavBar.css";
// import { Link } from "react-router-dom";
const FoodCategoryNavBar = () => {
  return (
    <div className="foodCategoryNavBar">
      <div>
        {/* <Link>Breakfast</Link> */}

        <Link style={{ textDecoration: "none" }} to="/breakfast">
          Breakfast
        </Link>
      </div>
      <div>
        {/* <Link>Lunch</Link> */}
        <Link style={{ textDecoration: "none" }} to="/lunch">
          Lunch
        </Link>
      </div>
      <div>
        {/* <Link>Dinner</Link> */}
        <Link style={{ textDecoration: "none" }} to="/dinner">
          {" "}
          Dinner
        </Link>
      </div>
    </div>
  );
};

export default FoodCategoryNavBar;
