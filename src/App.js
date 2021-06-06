import React, { Component, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Books from "./Components/Books";
import Mycart from "./Components/Mycart";
import Profile from "./Components/Profile";
import Dashboard from "./Components/Dashboard";
import Container from "./Components/Container";
import { connect } from "react-redux";
import { signIn } from "./actions/actions";
import { auth } from "./Components/DBCONFIG";
import PrivateRoute from "./Components/PrivateRoute";
import firebase from "firebase";

const App = ({ history, signIn }) => {
  // useEffect(() => {
  //   console.log("APP", history);
  //   firebase.auth().onAuthStateChanged((res) => {
  //     res ? login(res) : history.push("/");
  //   });
  // }, []);
  // const login = (res) => {
  //   console.log("LOgin", res);
  //   signIn(res.uid, res.displayName, res.photoURL, res.email);
  //   history.push("/books");
  // };
  return (
    <BrowserRouter>
      {/* <Container /> */}
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <PrivateRoute path="/books" component={Books} />
        <PrivateRoute path="/addbook" component={Home} />
        <PrivateRoute path="/mycart" component={Mycart} />
        <PrivateRoute path="/userprofile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default connect(null, { signIn })(App);
