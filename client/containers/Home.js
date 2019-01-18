import React, { Component } from 'react'

const backgroundColor = `rgb(${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)})`

export default class Home extends Component {
  render() {
    return (
      <div style={{backgroundColor}}>HOME</div>
    )
  }
}