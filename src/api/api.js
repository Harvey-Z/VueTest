import axios from 'axios'
import { Loading } from 'element-ui'

axios.defaults.baseURL = '/api/v1'
axios.defaults.timeout = 10000

let loading
let flag = true
// 打开loading
function startLoading() {
  loading = Loading.service({
    lock: true,
    text: '数据加载中...',
    background: 'rgba(0,0,0,0)'
  })
}

// 关闭loading
function endLoading() {
  loading.close()
  flag = true
}

axios.interceptors.request.use(
  config => {
    if (flag === true) {
      startLoading()
      flag = false
    }
    return config
  },
  err => Promise.reject(err)
)

axios.interceptors.response.use(response => {
  if (flag == false) {
    endLoading()
  }
  return response
}, err => {
  endLoading()
})
export default axios