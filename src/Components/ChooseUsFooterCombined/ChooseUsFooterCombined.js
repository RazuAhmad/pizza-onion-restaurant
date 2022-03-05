import React from "react";
import ChooseUs from "../ChooseUs/ChooseUs";
import Footer from "../Footer/Footer";

const ChooseUsFooterCombined = () => {
  return (
    <div>
      <p
        style={{ textAlign: "center", marginTop: "54px", marginBottom: "23px" }}
      >
        <button
          style={{
            borderRadius: "6px",
            backgroundColor: "#d1d1d1",
            border: "3px solid white",
            padding: "4px",
          }}
        >
          Checkout Your Food
        </button>
      </p>
      <ChooseUs />
      <Footer />
    </div>
  );
};

export default ChooseUsFooterCombined;
