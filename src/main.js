import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics';
import Hotjar from 'vue-hotjar'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-178486718-1',
  router
});

Vue.use (Hotjar, {
  id: '2802217'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
