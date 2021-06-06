import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { signIn } from "../actions/actions";
import firebase from "firebase";
import Navbar from "./Navbar";

const PrivateRoute = ({ component: Component, auth, signIn, ...rest }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((res) => {
      if (res) {
        signIn(res.uid, res.displayName, res.photoURL, res.email);
      }
    });
  }, [auth.isSignedIn]);
  console.log("atuh", auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth.isSignedIn ? (
          <Redirect to="/" />
        ) : (
          <>
            <Navbar />
            <Component {...props} />
          </>
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { signIn })(PrivateRoute);
