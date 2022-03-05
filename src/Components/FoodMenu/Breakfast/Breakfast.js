import React from "react";
import "./Breakfast.css";
import AllFoodItem from "../../../FakeData/fakeData.json";
import BreakfastDetails from "./BreakfastDetails/BreakfastDetails";
const Breakfast = () => {
  //   const [allFoodItem, setAllFoodItem] = useState([]);
  const breakfastItems = AllFoodItem.filter(
    (item) => item.foodCategory === "breakfast"
  );
  console.log(breakfastItems);
  return (
    <div className="breakfast">
      {breakfastItems.map((nk) => (
        <BreakfastDetails key={nk.id} singleFoodItem={nk} />
      ))}
    </div>
  );
};

export default Breakfast;
