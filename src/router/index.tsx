import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Spin } from 'antd'

const Home = lazy(() => import('@/pages/home'))

const RouterView: React.FC = () => {
  return (
    <Suspense fallback={<Spin className="global-spin" />}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  )
}

export default RouterView
