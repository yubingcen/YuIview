import Router from 'vue-router'
import Helper from '@/utils/Helper'
import Vue from 'vue'
Vue.use(Router)

// import Auth from '#u/Auth'

// import baseDesktopRoutes from '#m/base_desktop/routes'
// import appRoutes from '@/app/desktop/modules/system/routes'

// import { routes } from './SubSite'
const base = [
  {
    path: '/',
    name: 'test',
    component: () => import('@/app/desktop/modules/Test.vue')
  }
]

const router = new Router({
  routes: Helper.uniqueByKey(
    base.concat([]), // .concat(routes),
    'path'
  )
})

// router.beforeEach((to, from, next) => {
//   // Auth.requireAuth(to, from, next)
// })
// 页面跳转后回到最顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
