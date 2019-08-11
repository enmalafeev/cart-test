import Vue from 'vue';
import Buefy from 'buefy';
import SimpleVueValidation from 'simple-vue-validator';
import 'buefy/dist/buefy.css';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(SimpleVueValidation);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
