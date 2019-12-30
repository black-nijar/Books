import React, { Component } from 'react'
import MyBooks from './MyBooks';
import PurchasedBooks from './PurchasedBooks';

class Mycart extends Component {
  render() {
    return (
      <div className='container'>
        <div className='accordion' id='accordion'>
          <MyBooks/>
          <PurchasedBooks/>
        </div>
      </div>
    )
  }
}

export default Mycart
