import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: "Home",
    component: ()=>import('../views/home/home')
  },
  {
    path: '/course',
    name: "Course",
    component: ()=>import('../views/course/course')
  },
  {
    path: '/discuss',
    name: "Discuss",
    component: ()=>import('../views/discuss/discuss')
  },
  {
    path: '/test',
    name: "Test",
    component: ()=>import('../views/test/test')
  },
  {
    path: '/login',
    name: "Login",
    component: ()=>import('../views/login/login')
  },
  {
    path: '/register',
    name: "Register",
    component: ()=>import('../views/register/register')
  },
]

export default new Router({
  mode: 'history',
  routes
})

//解决导航重复点击报错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
