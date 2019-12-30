import React, { Component } from 'react'
import Auth from './Auth';

class Dashboard extends Component {
  render() {
    return (
      <div className='container'>
        <div className='home-page'>
          <h1>Welcome </h1>
            <h3>
              You can publish your books here !!!.To publish 
            </h3>
          <Auth/>
        </div>
      </div>
    )
  }
}

export default Dashboard
