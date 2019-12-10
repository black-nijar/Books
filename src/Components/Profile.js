import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
  render() {
    const { userName, userImage, userEmail } = this.props.user
    return (
      <div className='container'>
        <div className='user-profile'>
          <div className='card'>
            <h2 className='profile'>Profile</h2>
            <hr/>
            {
              userName ?
                (
                  <div>
                    <div className='user-image'>
                      <img className='rounded-circle' src={userImage} alt='userimage' />
                    </div>
                    <h4 className='user-name'>Name : {userName}</h4>
                    <h4 className='user-email'>Email ID : {userEmail}</h4>
                  </div>
                )
                : (
                  <div className='text-center'>
                    Sign In to see your profile
                </div>
                )
            }

          </div>
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
