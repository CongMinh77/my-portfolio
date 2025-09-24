import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

/**
 * Create root and render app
 */

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(<App />)

/**
 * Report web vitals
 * @see https://bit.ly/CRA-vitals
 */
reportWebVitals()
