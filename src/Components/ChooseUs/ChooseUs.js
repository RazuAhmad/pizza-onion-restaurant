import React from "react";
import { NavLink } from "react-router-dom";
import "./ChooseUs.css";
const ChooseUs = () => {
  return (
    <>
      <h3>Why you choose us</h3>
      <p>
        Barton waited twenty always repair in within we do. An delighted
        offending
      </p>
      <p>curiosity my is dashwoods at. Boy prosperous increasing surrounded</p>
      <div className="chooseUs">
        <div style={{ padding: "10px" }}>
          <img
            src="https://i.ibb.co/pdyt1FH/adult-blur-blurred-background-687824.png"
            alt=""
          />
          <br />
          <h4> Fast Delivery</h4>
          <p>Keep your systems in sync with automated web hook </p>
          <p>based notifications each time link is paid and how we</p>
          <p>dream about our future</p>
          <button>See more</button>
        </div>
        <div>
          <img
            src="https://i.ibb.co/QNxKGXN/architecture-building-city-2047397.png"
            alt=""
          />
          <br />
          <h4> Fast Delivery</h4>
          <p>Keep your systems in sync with automated web hook </p>
          <p>based notifications each time link is paid and how we</p>
          <p>dream about our future</p>
          <button>See more</button>
        </div>
        <div>
          <img src="https://i.ibb.co/89PYvtB/chef-cook-food-33614.png" alt="" />
          <br />
          <h4> Fast Delivery</h4>
          <p>Keep your systems in sync with automated web hook </p>
          <p>based notifications each time link is paid and how we</p>
          <p>dream about our future</p>
          <button>See more</button>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
