import React from "react";

import AllFoodItem from "../../../FakeData/fakeData.json";
import LunchDetails from "../Lunch/LunchDetails/LunchDetails";
const Lunch = () => {
  const LunchItems = AllFoodItem.filter(
    (item) => item.foodCategory === "lunch"
  );

  return (
    <div className="breakfast">
      {LunchItems.map((nk) => (
        <LunchDetails key={nk.id} singleFoodItem={nk} />
      ))}
    </div>
  );
};

export default Lunch;
