import React from 'react'
import logo from '@/assets/img/logo-sm.png'

import Home from '@/pages/home'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" style={{ width: '60px' }} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Home myName="Bob" age={20} />
    </div>
  )
}

export default App
