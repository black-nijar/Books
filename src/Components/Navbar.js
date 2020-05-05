import React, { Component } from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";

class Navbar extends Component {
  render() {
    return (
      <div className="ui navbar" style={{ marginBottom: "50px" }}>
        <nav className="navbar fixed-top navbar-dark bg-dark ">
          <div className="ui container">
            <Link to="/" className="navbar-brand">
              <h6>Books</h6>
            </Link>
            <ul className="nav">
              <Link to="/mycart" className="mycart">
                <h6>
                  <i className="material-icons">add_shopping_cart</i>My Cart
                </h6>
              </Link>
              <Link to="/userprofile" className="Profile">
                <h6>
                  <i className="material-icons">account_circle</i>Profile
                </h6>
              </Link>
              <Auth />
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
