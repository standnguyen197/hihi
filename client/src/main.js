// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import locale from 'iview/dist/locale/vi-VN';
import VueRouter from 'vue-router';
import iView from 'iview';
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});
import 'iview/dist/styles/iview.css';
import '@/assets/custom-css/index.less';
import FBSdk from './services/FBSdk';
import FBSignInButton from 'vue-facebook-signin-button';
import VueSession from 'vue-session';
import VueMoment from 'vue-moment';
import moment from 'moment-timezone';
require('moment/locale/vi');
import Bars from 'vuebars'
import Trend from 'vuetrend';
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import vueHeadful from 'vue-headful';
import VueTyperPlugin from 'vue-typer';
import VueLocalStorage from 'vue-localstorage'
//--- VUE-SOCKET-IO ----//
import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'http://localhost:8081');
Vue.use(VueSocketio, 'http://localhost:8080');
Vue.use(VueLocalStorage);
Vue.use(VueTyperPlugin);
Vue.component('vue-headful', vueHeadful);
Vue.use(VueChartkick, {adapter: Chart})
Vue.use(Trend);
Vue.use(Bars);
Vue.use(require('vue2-animate/dist/vue2-animate.min.css'));
Vue.use(VueMoment, {
  moment,
})
Vue.use(FBSignInButton);
Vue.use(FBSdk);
Vue.use(VueSession);
Vue.use(iView,{locale});
Vue.use(VueRouter);

Vue.config.productionTip = false
export const eventBus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
