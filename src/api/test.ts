import { AxiosPromise } from 'axios'
import {
  httpGet
  // httpPost
} from '@/utils/axios'

export function testApi(): AxiosPromise {
  return httpGet('/common/area/appTreeList')
}
