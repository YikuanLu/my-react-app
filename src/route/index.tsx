import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// const Home = lazy(() => import('@/pages/home'))
import Home from '@/pages/home'

const RouterView: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home myName="Bob" age={20} />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterView
