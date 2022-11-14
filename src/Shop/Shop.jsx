import React, { Component } from 'react'
import Cart from '../components/Cart'
import ShoesStore from '../components/ShoesStore'

export default class Shop extends Component {
  render() {
    return (
      <div>
        <ShoesStore/>
      </div>
    )
  }
}
