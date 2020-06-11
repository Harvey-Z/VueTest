import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home =(resolve) =>{
  import('@/components/Home').then(module =>{
    resolve(module)
  })
}
const Myhome = (resolve) =>{
  import('@/components/Myhome').then(module =>{
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
    },
    {
      path: '/myHome',
      name: 'Myhome',
      component: Myhome
    }
  ]
})

export default router