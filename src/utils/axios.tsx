import Axios, { AxiosResponse, AxiosError, AxiosPromise } from 'axios'

interface HttpConfig {
  timeout: number;
}

// interface Pas

const axiosConfig: HttpConfig = {
  timeout: 600000
}

const instance = Axios.create(axiosConfig)

// 请求前拦截
instance.interceptors.request.use(
  (req) =>
    // const { token } = store.getState().commonData.userInfo
    // req.headers.token = token
    req,
  (err) => Promise.reject(err)
)

function resolveFn(response: AxiosResponse): AxiosPromise {
  return Promise.resolve(response)
}

const rejectFn = (err: AxiosError): AxiosPromise =>
  // const message = err.response ? err.response.data.message : '系统错误'
  Promise.reject(err)

// 返回后拦截
instance.interceptors.response.use(resolveFn, rejectFn)

export function httpPost<T, P>(url: string, data?: P): AxiosPromise<T> {
  return instance.post<T>(url, data)
}

export function httpGet<T, P>(url: string, data?: { params: P }): AxiosPromise<T> {
  const params = data ? data.params : {}
  return instance({ method: 'get', url, params })
}

export default { httpPost, httpGet }
