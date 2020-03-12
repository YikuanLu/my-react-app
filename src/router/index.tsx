import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Spin } from 'antd'

const Home = lazy(() => import('@/pages/home'))

const RouterView: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<Spin className="global-spin" />}>
            <Home />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterView
