import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../../FakeData/fakeData.json";
const SingleFoodDetails = (props) => {
  const { foodId } = useParams();
  const specificFood = fakeData.find((nk) => (nk.id = foodId));
  const foodName = specificFood.foodName;

  return (
    <div>
      <h2>
        This is details about <span style={{ color: "red" }}>{foodName}</span>
      </h2>
    </div>
  );
};

export default SingleFoodDetails;
