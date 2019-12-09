import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
  render() {
    const { userName, userImage } = this.props.user
    return (
      <div className='container'>
        <div className='user-profile'>
          <h2 className='profile'>Profile</h2>
          {
            userName ?
            (
              <div>
                <img className='img-thumbnail' src={userImage} alt='userimage' />
                <h4 className='user-name'>Name: {userName}</h4>
              </div>
            )
            : (
              <div className='text-center'>
                Sign In to see your profile
              </div>
            )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth
  }
}
export default connect(mapStateToProps)(Profile)
