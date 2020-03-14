import { FC } from 'react'

export interface RouteItem {
  path: string;
  name: string;
  key: string;
  isAuth: boolean;
  isLayout: boolean;
  exact?: boolean;
  component?: FC;
  routes?: Array<RouteItem>;
}
