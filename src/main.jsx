import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// la file chay dau tien
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* render component App */}
    {/* nhet App vao ben trong div root */}
    <App />
  </React.StrictMode>,
)
