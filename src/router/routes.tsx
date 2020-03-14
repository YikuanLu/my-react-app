import { RouteItem } from '@/types'
import BasicLayout from '@/layouts/BasicLayout'

const routes: Array<RouteItem> = [
  {
    path: '/',
    name: '首页',
    isAuth: false,
    key: 'home',
    exact: true,
    component: BasicLayout,
    isLayout: false,
  },
]

export default routes
