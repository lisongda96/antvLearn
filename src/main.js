import Vue from 'vue'
import App from './App.vue'
import * as G2 from '@antv/g2'
Vue.prototype.$G2=G2;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
