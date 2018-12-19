import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import uploader from 'vue-simple-uploader'

Vue.config.productionTip = false
Vue.use(MuseUI, uploader)
new Vue({
  router,
  store,
  uploader,
  render: h => h(App)
}).$mount('#app')

//全局登录权限判断
// router.beforeEach((to, from, next) => {
//   if (store.getters.role) { //判断role 是否存在

//     if (store.getters.newrouter.length !== 0) {
//       next() //resolve 钩子
//     } else {
//       let newrouter
//       if (store.getters.role == 'Admin') { //判断权限
//         newrouter = powerRouter
//       } else {
//         let newchildren = powerRouter[0].children.filter(route => {
//           if (route.meta) {
//             if (route.meta.role == store.getters.role) {
//               return true
//             }
//             return false
//           } else {
//             return true
//           }
//         });
//         newrouter = powerRouter
//         newrouter[0].children = newchildren
//       }
//       router.addRoutes(newrouter) //添加动态路由
//       store.dispatch('Roles', newrouter).then(res => {
//         next({ ...to
//         })
//       }).catch(() => {

//       })
//     }
//   } else {
//     if (['/login'].indexOf(to.path) !== -1) {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })