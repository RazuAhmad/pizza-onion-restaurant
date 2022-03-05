import React from "react";
import FoodCategoryNavBar from "./Components/FoodCategoryNavBar/FoodCategoryNavBar";
import Breakfast from "./Components/FoodMenu/Breakfast/Breakfast";
import Dinner from "./Components/FoodMenu/Dinner/Dinner";
import Navbar from "./Components/Navbar/Navbar";
import SearchCompo from "./Components/SearchCompo/SearchCompo";
import Lunch from "./Components/FoodMenu/Lunch/Lunch";
// import FoodMenu from "./Components/FoodMenu/FoodMenu";
import { Routes, Route } from "react-router-dom";
import ChooseUs from "./Components/ChooseUs/ChooseUs";
import Footer from "./Components/Footer/Footer";
import SingleFoodDetails from "./Components/FoodMenu/SingleFoodDetails/SingleFoodDetails";
import ChooseUsFooterCombined from "./Components/ChooseUsFooterCombined/ChooseUsFooterCombined";

const App = () => {
  return (
    <div>
      <Navbar />
      <SearchCompo />
      <br />
      <br />
      <br />
      <FoodCategoryNavBar />
      <Routes>
        <Route path="/" element={<Breakfast />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />

        <Route path="/DetailView/:foodId" element={<SingleFoodDetails />} />
      </Routes>
      <ChooseUsFooterCombined />
    </div>
  );
};

export default App;
