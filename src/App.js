import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home';
import Books from './Components/Books';
import Mycart from './Components/Mycart';
import Profile from './Components/Profile';
import Dashboard from './Components/Dashboard';
import Container from './Components/Container';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Container/>
        <Switch>
         <Route path='/' exact component={Dashboard}/>
          <Route path='/addbook' component={Home}/>
          <Route path='/books' component={Books}/>
          <Route path='/mycart' component={Mycart}/>
          <Route path='/userprofile' component={Profile}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App