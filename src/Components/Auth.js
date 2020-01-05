import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/actions'
import { withRouter } from 'react-router-dom'

class Auth extends Component {
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
      this.props.signIn(userId, userName, image, userEmail)
      this.props.history.push('/books')
    } else {
      this.props.signOut()
      this.props.history.push('/')
    }
  }
  onSignIn = () => {
    this.auth.signIn()
  }
  onSignOut = () => {
    this.auth.signOut()
  }
  renderButton = () => {
    const { user: { isSignedIn } } = this.props
    if (isSignedIn === null) {
      return null
    } else if (isSignedIn) {
      return (
        <div className='google-button'>
          <button
            className='button-google'
            onClick={this.onSignOut}
          >
            Sign Out
          </button>
        </div>
      )
    } else {
      return (
        <div className='shadow-sm'>
          <button
            className='button-google'
            onClick={this.onSignIn}
          >
            Sign in with Google
          </button>
        </div>
      )
    }
  }
  render() {
    return (
      <div className='shadow-sm'>
        {this.renderButton()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth
  }
}
export default withRouter(connect(mapStateToProps, { signIn, signOut })(Auth))
