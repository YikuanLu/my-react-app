import React from 'react' // Suspense // lazy,
// import BasicLayout from '@/layouts/BasicLayout'
// import { RouteItem } from '@/types'
// import routes from '@/router/routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import { Spin } from 'antd'

import Login from '@/pages/login'
import BasicLayout from '@/layouts/BasicLayout'

const RouterView: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
      {/* 主路由 */}
      <Switch>
        <Route path="/" exact>
          <BasicLayout>
            <div>asd</div>
          </BasicLayout>
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterView
