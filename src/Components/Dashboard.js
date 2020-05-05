import React, { Component } from "react";
import Auth from "./Auth";

class Dashboard extends Component {
  render() {
    return (
      <div className="landing">
        <div className='landing-inner'>
          <h1>Welcome </h1>
          <h5>
            Whether you're a teacher, photographer or hobbyist, share your
            expertise. Create & self publish your book today! You can publish
            your books here !!!.To publish
          </h5>
          <Auth />
        </div>
      </div>
    );
  }
}

export default Dashboard;
