import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom'


import Nav from './Navigation'

import Home from './Pages/Home'
import Contact from './Pages/Contact'


export default class App extends Component {

  render() {
    return (
      <Router>
        <Nav/>

        <Switch>
          <Route exact path ="/" ><Home/></Route>
          <Route path = "/contact"><Contact/></Route>
        </Switch>
      </Router>
    )
  }
  
}
