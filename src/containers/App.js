import React, { Component } from 'react'
import '../styles/App.css'
import Header from '../components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h3 className="App-intro">Good Pies for Good: because everyone deserves a piece</h3>
      </div>
    )
  }
}

export default App
