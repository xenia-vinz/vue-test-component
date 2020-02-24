import Vue from 'vue';
import VueSuperagent from 'vue-superagent';
import VuePapaParse from 'vue-papa-parse';

import App from './App.vue';

Vue.use(VuePapaParse);
Vue.use(VueSuperagent);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
