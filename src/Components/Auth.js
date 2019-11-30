import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/actions'

class Auth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        client_id:
          '208738344058-tot0qo9sddkl100shpqlh68k4ccs4q7h.apps.googleusercontent.com',
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
      const id = this.auth.currentUser.Ab.w3.Eea
      const name = this.auth.currentUser.Ab.w3.ig
      const image = this.auth.currentUser.Ab.w3.Paa
      this.props.signIn(id, name, image)
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
