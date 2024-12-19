import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

// import Profile from './components/Profile.jsx'
// import { Practices } from './Practices.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Practices /> */}
    {/* <Profile/> */}
  </React.StrictMode>
)