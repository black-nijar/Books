import React, { Component } from 'react'
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div className='ui container'>
        <h2 className='welcome'>Welcome {this.props.user.userName}</h2>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth
  }
}
export default connect(mapStateToProps)(Home)
