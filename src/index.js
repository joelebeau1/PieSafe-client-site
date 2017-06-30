import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.css'

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
registerServiceWorker()
