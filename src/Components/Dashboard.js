import React, { Component } from 'react'
import Auth from './Auth';

class Dashboard extends Component {
  render() {
    return (
      <div className='container'>
        <div className='home-page'>
          <h1>Welcome </h1>
          <p>
            Whether you're a teacher, photographer or hobbyist, share your expertise. Create & self publish your book today!
            You can publish your books here !!!.To publish
            </p>
          <div className='shadow-sm'>
            <Auth />
          </div>

        </div>
      </div>
    )
  }
}

export default Dashboard
