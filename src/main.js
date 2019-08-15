import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(SimpleVueValidation);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
