import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from './Auth';

class Navbar extends Component {
  render() {
    return (
      <div className='ui navbar'>
        <nav className='navbar fixed-top navbar-dark bg-dark '>
          <div className='ui container'>
            <Link to='/' className='navbar-brand'>Books</Link>
            <ul className='nav'>
              <Link to='/mycart' className='mycart'>My Cart</Link>
              <Link to='/profile' className='Profile'>Profile</Link>
              <Auth />
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
