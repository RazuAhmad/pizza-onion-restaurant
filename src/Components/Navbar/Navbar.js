import React from "react";
import "./NavLogo/Navbar.css";
import NavLogo from "./NavLogo/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="ParentNavbar">
      <div>
        <img src={NavLogo} alt="" />
      </div>
      <div className="three-together">
        <div>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div>
          <span>Login</span>
        </div>
        <div>
          <button
            style={{
              width: "100px",
              borderRadius: "9px",
              backgroundColor: "#ff5868",
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
