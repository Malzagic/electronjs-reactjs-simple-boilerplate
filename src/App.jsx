import React from 'react'

export default function App() {
  return (
    <div>
      <h1>Welcome in ElectronJS with ReactJS boilerplate</h1>
      <p id="preload">{window.api.platform}</p>
    </div>
  )
}
