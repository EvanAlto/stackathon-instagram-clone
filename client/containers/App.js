import React, { Component, Fragment } from 'react'
import Header from '../components/Header'
import Home from './Home'
import { Switch, Route } from 'react-router-dom'

export default class App extends Component {

  render() {
    return (
      <Fragment>
        <Header></Header>
        <Switch>
          <Route component={Home} />
        </Switch>
      </Fragment>
    )
  }
}