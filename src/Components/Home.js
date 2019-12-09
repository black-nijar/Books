import React, { Component } from 'react'
import { connect } from 'react-redux';
import DB_CONFIG from '../Components/DBCONFIG'

class Home extends Component {
  constructor(props) {
    super(props)
    this.bookDB = DB_CONFIG.child('books')
  }

  handleSubmit = e => {
    e.preventDefault();
    const bookName = this.book.value;
    const id = new Date().getTime()
    const { userId } = this.props.user
    const authorId = userId
    const bookDetail = {
      id,
      bookName,
      authorId
    }
    this.bookDB.child(id).set(bookDetail)
    this.book.value = ''
    this.props.history.push('/')
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
          </div><br />
          <button className='btn btn-outline-info' type='submit'>
            Publish
        </button>
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
export default connect(mapStateToProps)(Home)
