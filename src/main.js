// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueTouch from 'vue-touch'
// import vue2Touch from 'vue2-touch'
// import vue2TouchEvents from 'vue2-touch-events'

Vue.config.productionTip = false
Vue.use(vueTouch)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
