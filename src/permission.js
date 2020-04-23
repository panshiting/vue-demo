// 路由全局守卫
// 权限控制逻辑在这里
import router from './router'
// import store from './store'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
// import { Message } from 'element-ui'
// import { getToken } from '@/utils/auth' // 从cookie获取令牌
// const whiteList = ['/login'] // 无需令牌白名单

router.beforeEach(async (to, from, next) => {
  // NProgress.configure({ showSpinner: false }) // 右上角不出现转圈圈
  // NProgress.start() // 进度条开始爬啊爬

  // 获取令牌判断用户是否登录
  // const hasToken = getToken()
  // //   有令牌说明已登录
  // if (hasToken) {
  //   if (to.path === '/login') {
  //     // 若已登录重定向至首页
  //     next({ path: '/' })
  //   } else {
  //     // 若用户已经获取用户信息
  //     if (store.getters.userId) {
  //       next()
  //     } else {
  //       try {
  //         // 先请求获取用户信息
  //         const { menuList } = await store.dispatch('getInfo')
  //         //   console.log(menuList)
  //         // 根据当前用户角色动态生成路由
  //         const accessRoutes = await store.dispatch('generateRoutes', menuList)
  //         // 获取节假日信息
  //         await store.dispatch('setRunDate')
  //         // 获取机组信息
  //         await store.dispatch('getGensetList')
  //         // 添加这些路由至路由器
  //         router.addRoutes(accessRoutes)
  //         // 继续路由切换，确保addRoutes完成
  //         next({ ...to, replace: true })
  //       } catch (error) {
  //         // 出错需重置令牌并重新登录（令牌过期、网络错误等原因）
  //         await store.dispatch('logout')
  //         Message.error(error || 'Error')
  //         next(`/login?redirect=${to.path}`)
  //       }
  //     }
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     next(`/login?redirect=${to.path}`)
  //   }
  // }
  next()
})

// router.afterEach(() => {
//   NProgress.done()
// })
