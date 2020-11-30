// @ts-ignore
import Vue from 'vue';
// @ts-ignore
import App from './App';
import router from "./router";
import store from "./store"


import './plugins/element.js'

// 引入mockServer  为了加载里面代码 里面代码一旦加载，就去启动mock服务器。从而拦截相应请求
import './mock/mockServer'

import "./styles/reset.css";
Vue.config.productionTip = false

/* eslint-disable no-new */
// @ts-ignore
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
