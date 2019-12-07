import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Books from './Components/Books';
import Mycart from './Components/Mycart';
import Profile from './Components/Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/><br/><br/>
        <Switch>
          <Route path='/addbook' component={Home}/>
          <Route path='/' exact component={Books}/>
          <Route path='/mycart' component={Mycart}/>
          <Route path='/profile' component={Profile}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App