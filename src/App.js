import React, { Component } from "react";
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

class App extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          client_id:
            "670300519833-agi5bji2c3s0l9061jft2p0apv20hhv1.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      const userId = this.auth.currentUser.je.Pt.MU;
      const userName = this.auth.currentUser.je.Pt.Ad;
      const image = this.auth.currentUser.je.Pt.QK;
      const userEmail = this.auth.currentUser.je.Pt.yu;
      if (userId !== undefined && userName !== undefined && image !== undefined && userEmail !== undefined) {
        this.props.signIn(userId, userName, image, userEmail);
        //this.props.history.push("/books");
      }
    }
  };
  render() {
    return (
      <BrowserRouter>
        <Container />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/addbook" component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/mycart" component={Mycart} />
          <Route path="/userprofile" component={Profile} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, { signIn })(App);
