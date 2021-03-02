// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import VideoPlayer from 'vue-video-player'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import { Base64 } from 'js-base64'
Vue.use(VideoPlayer)
Vue.use(Mint);
Vue.use(ElementUI);
Vue.use(Base64);
Vue.config.productionTip = false
Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
