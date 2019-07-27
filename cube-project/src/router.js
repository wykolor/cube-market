import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store';
let Login = () => import('./views/Login.vue');

Vue.use(Router);

let router = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        auth: true
      },
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
});
// 路由导航全局守卫
router.beforeEach((to, from, next) => {
  if (to.meta.auth) { //需要令牌验证的页面
    if (store.state.token) { //已经登录
      next();
    } else { //需要登录
      next({
        path: '/login',
        query: {
          redirect: to.path
        }
      })
    }
  } else { //不需要验证的直接进入下级页面
    next();
  }
})
// 导出路由器
export default router;