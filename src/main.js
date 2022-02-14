import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import { message1, data } from './data';
// import alertFunction from './alert';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// alertFunction(message1);
// alertFunction(data.message);
