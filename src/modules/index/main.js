import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from 'store/index'

import http from 'utils/httpIndex'
Vue.prototype.$get = http.get
Vue.prototype.$post = http.post

import 'plugins/element.js'
import 'plugins/mavonEditor.js'
import 'plugins/iview.js'
import 'plugins/highlightjs'

// 全局自定义组件
import MyLoading from 'components/MyLoading'
Vue.use(MyLoading)

import MyPage from 'components/MyPage'
Vue.use(MyPage)

import TextLoading from 'components/TextLoading'
Vue.use(TextLoading)

// Vue.prototype.$baseUrl = baseUrl
// // 引入ivew,
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
// Vue.use(iView)
// // 路由跳转开启进度条
// router.beforeEach((to, from, next) => {
//   iView.LoadingBar.start();
//   next();
// });
// router.afterEach(route => {
//   iView.LoadingBar.finish();
// });
let config = {
  proxyTarget: process.env.VUE_APP_API_BASE_URL
};

Vue.prototype.$staticUrl = config.proxyTarget + '/img/';
Vue.prototype.$baseApiUrl = config.proxyTarget + "/api/v2";
console.log(process.env, '环境变量');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')