import axios from 'axios'
import { Loading } from 'element-ui'

axios.defaults.baseURL = '/api/v1'
axios.defaults.timeout = 10000

let loading
let flagNumber = 0

// 打开loading
function startLoading() {
  if(flagNumber==0){
    loading = Loading.service({
      lock: true,
      text: '数据加载中...',
      background: 'rgba(0,0,0,0.3)',
      spinner:'el-icon-loading'
    })
  }
}

// 关闭loading
function endLoading() {
  flagNumber--;
  if(flagNumber<=0){
    loading.close()
  }
}

axios.interceptors.request.use(
  config => {
    startLoading()
    return config
  },
  err => Promise.reject(err)
)

axios.interceptors.response.use(response => {
  endLoading()
  return response
}, err => {
  endLoading()
})
export default axios