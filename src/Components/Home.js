import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addBook } from '../actions/actions';

class Home extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const bookName = this.book.value;
    console.log('book :',bookName);
    this.props.addBook(bookName,this.props.user);
    this.book.value = ''
  }
  render() {
    return (
      <div className='ui container'>
        <h2 className='welcome'>Welcome {this.props.user.userName}</h2>
        <form className='form' onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='book-name'>Book name</label>
          <input
            className='form-control'
            placeholder='Book name'
            ref={input => this.book = input}
            required
          />
        </div><br/>
        <button className='btn btn-info' type='submit'>Add</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth
  }
}
export default connect(mapStateToProps,{addBook})(Home)
