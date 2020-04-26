import Vue from 'vue'
import router from './router'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import elDragDialog from './directive/el-drag-dialog'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(elDragDialog)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
