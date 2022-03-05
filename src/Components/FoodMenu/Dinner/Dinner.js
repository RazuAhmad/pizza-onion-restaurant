import React from "react";
// import "./Dinner.css";
import AllFoodItem from "../../../FakeData/fakeData.json";
import DinnerDetails from "./DinnerDetails/DinnerDetails";
const Dinner = () => {
  const dinnerItems = AllFoodItem.filter(
    (item) => item.foodCategory === "dinner"
  );

  return (
    <div className="breakfast">
      {dinnerItems.map((nk) => (
        <DinnerDetails key={nk.id} singleFoodItem={nk} />
      ))}
    </div>
  );
};

export default Dinner;
