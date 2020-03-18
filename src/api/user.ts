import { AxiosPromise } from 'axios'
import {
  // httpGet
  httpPost
} from '@/utils/axios'

export function login<T, P>(data: P): AxiosPromise<T> {
  return httpPost<T, P>('/user/admin/login', data)
}
