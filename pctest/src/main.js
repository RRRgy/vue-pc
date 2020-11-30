// @ts-ignore
import Vue from 'vue';
// @ts-ignore
import App from './App';
import router from "./router";
import store from "./store"


import './plugins/element.js'
import "./styles/reset.css";
Vue.config.productionTip = false

/* eslint-disable no-new */
// @ts-ignore
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
