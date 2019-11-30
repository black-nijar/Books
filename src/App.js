import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Books from './Components/Books';
import Mycart from './Components/Mycart';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/><br/><br/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/books' component={Books}/>
          <Route path='/mycart' component={Mycart}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App