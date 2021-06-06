import React, { Component, useEffect, useState } from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import { signIn } from "../actions/actions";
import DB_CONFIG from "./DBCONFIG";

const Dashboard = ({ signIn, history, auth }) => {
  const [user, setUser] = useState(auth.isSignedIn);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((res) => {
      res ? login(res) : history.push("/");
    });
  }, [user]);

  const login = (res) => {
    signIn(res.uid, res.displayName, res.photoURL, res.email);
    history.push("/books");
  };
  const handleGoogleSignIn = (e) => {
    // e.preventDefault();
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res.user);
        // id, name, image, emailId
        signIn(
          res.user.uid,
          res.user.displayName,
          res.user.photoURL,
          res.user.email
        );
        const userDetail = {
          userId: res.user.uid,
          userEmail: res.user.email,
          userName: res.user.displayName,
          userImage: res.user.photoURL,
        };
        DB_CONFIG.child("users").child(userDetail.userId).set(userDetail);
        history.push("/books");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="landing">
      <div className="landing-inner">
        <h1>Welcome </h1>
        <h5>
          Whether you're a teacher, photographer or hobbyist, share your
          expertise. Create & self publish your book today! You can publish your
          books here !!!.To publish
        </h5>
        {/* <Auth /> */}
        <div className="shadow-sm">
          <button className="btn " onClick={handleGoogleSignIn}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="google icon"
              width="40"
              height="40"
              style={{
                backgroundColor: "white",
                borderRadius: "60%",
              }}
            />
            <span> Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { signIn })(Dashboard);
