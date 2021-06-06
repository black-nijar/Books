import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { signIn } from "../actions/actions";
import firebase from "firebase";

const PrivateRoute = ({ component: Component, auth, signIn, ...rest }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((res) => {
      if (res) {
        signIn(res.uid, res.displayName, res.photoURL, res.email);
      }
    });
  }, []);
  console.log("atuh", auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth.isSignedIn ? <Redirect to="/" /> : <Component {...props} />
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
