/**
 *  @format
 */
/* eslint-disable no-unused-vars*/

import React from "react";
import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center my-3">
        <div>
          <h3>Food Lover</h3>
          <p>Cooking for the soul</p>
        </div>
        <div className="d-flex">
          <div>
            <input
              className="border-0"
              type="text"
              name="search"
              id="search"
              placeholder="Search"
            />
            <hr className="px-5" />
          </div>
          <div>
            <h3>
              <FaSistrix></FaSistrix>
            </h3>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <div>
        <Link className="mx-2 text-decoration-none" to="/">
            Home
        </Link>
        </div>
        <div>

          <Link className="mx-2 text-decoration-none" to="/block">
            Block
          </Link>
          <Link className="mx-2 text-decoration-none" to="login">
            LogIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
