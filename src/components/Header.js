import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img
          src="https://cdn.shopify.com/s/files/1/0610/2881/products/Dutch_Apple_Pie_1024x1024.jpg?v=1446857245"
          className="App-logo"
          alt="logo"
        />

        <h2>Welcome to Pie Safe</h2>
        <p className="Quote">{this.props.quote}</p>
      </div>
    )
  }
}

export default Header
