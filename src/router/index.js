import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//直接return
// const Home = () => import('@/components/Home')
// const Home = function(){
//   return import('@/components/Home')
// }
const Home =(resolve) =>{
  import('@/components/Home').then(module =>{
    resolve(module)
  })
}
const router = new Router({
  mode:'history',
  routes:[
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

export default router