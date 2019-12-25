import React, { Component } from 'react'
import MyBooks from './MyBooks';
import PurchasedBooks from './PurchasedBooks';

class Mycart extends Component {
  render() {
    return (
      <div className='container'>
        <div className='accordion' id='accordion'>
          <div className='btn-group'>
            <MyBooks/>
            <PurchasedBooks/>
          </div>
        </div>
      </div>
    )
  }
}

export default Mycart
