import Vue from 'vue'
import VueRouter from 'vue-router'
import Result from './pages/Result'
import HomePage from './pages/HomePage'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    name: 'home',
    path: '/',
    component: HomePage,
    props: true
  }, {
    name: 'result',
    path: '/result',
    component: Result,
    props: true
  }]
})
