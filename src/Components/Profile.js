import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from "firebase";

class Profile extends Component {
  render() {
    const {
      user: { userName, userImage, userEmail },
    } = this.props;
    return (
      <div className="container">
        <div className="user-profile">
          <div className="card">
            <h2 className="profile">Profile</h2>
            <hr />
            {userName ? (
              <div>
                <div className="user-image">
                  <img
                    className="rounded-circle"
                    src={userImage}
                    alt="userimage"
                  />
                </div>
                <h6 className="user-name">Name : {userName}</h6>
                <h6 className="user-email">Email ID : {userEmail}</h6>
                <div
                  className="shadow-sm text-center "
                  onClick={() => {
                    firebase.auth().signOut();
                  }}
                >
                  <button className="btn btn-danger">Sign Out</button>
                </div>
              </div>
            ) : (
              <div className="text-center">Sign In to see your profile</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
  };
};
export default connect(mapStateToProps)(Profile);
