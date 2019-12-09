import React, { Component } from 'react'
import { connect } from 'react-redux';
import DB_CONFIG from '../Components/DBCONFIG'
import { signIn, signOut } from '../actions/actions'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.userDB = DB_CONFIG.child('users')
  }
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        client_id:
          '670300519833-agi5bji2c3s0l9061jft2p0apv20hhv1.apps.googleusercontent.com',
        scope: 'email'
      })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get())
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
  }
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      const userId = this.auth.currentUser.Ab.w3.Eea
      const userName = this.auth.currentUser.Ab.w3.ig
      const image = this.auth.currentUser.Ab.w3.Paa
      const userEmail = this.auth.currentUser.Ab.w3.U3
      const details = {
        userId,
        userName,
        userEmail
      }
      this.userDB.child(userId).set(details)
      this.props.signIn(userId, userName, image, userEmail)
    } else {
      this.props.signOut()
    }
  }
  onSignIn = () => {
    this.auth.signIn()
  }
  onSignOut = () => {
    this.auth.signOut()
  }
  renderButton = () => {
    if (this.props.isSignedIn === null) {
      return null
    } else if (this.props.isSignedIn) {
      return (
        <button className='btn'
          onClick={this.onSignOut}
        >
          Sign Out
        </button>
      )
    } else {
      return (
        <button className='btn'
          onClick={this.onSignIn}
        >
          Sign in with Google
        </button>
      )
    }
  }
  render() {
    return (
      <div>
        {this.renderButton()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}
export default connect(mapStateToProps, { signIn, signOut })(Auth)
