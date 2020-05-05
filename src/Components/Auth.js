import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/actions";
import { withRouter } from "react-router-dom";

class Auth extends Component {
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
        this.props.history.push("/books");
      }
    } else {
      this.props.signOut();
      this.props.history.push("/");
    }
  };
  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };
  renderButton = () => {
    const {
      user: { isSignedIn },
    } = this.props;
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <h6
          style={{ color: "white", paddingLeft: "10px", cursor: "pointer" }}
          onClick={this.onSignOut}
        >
        <i className='material-icons'>person_outline</i>
          Sign out
        </h6>
      );
    } else {
      return (
        <div className="shadow-sm">
          <div className='btn btn-danger' onClick={this.onSignIn}>
            Sign In with Google
          </div>
        </div>
      );
    }
  };
  render() {
    return <div className="shadow-sm">{this.renderButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
  };
};
export default withRouter(connect(mapStateToProps, { signIn, signOut })(Auth));
