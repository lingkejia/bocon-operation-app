import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import api from './api/index'

//自定义混入
import mixin from './lib/mixin';

//自定义指令
import directive from './directive/directive';

//第三方组件库
import Vant from 'vant';
import 'vant/lib/index.css';

//自定义样式表
import './style/index.less';

Vue.use(Vant);

Vue.mixin(mixin);

Vue.prototype.$api = api;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
