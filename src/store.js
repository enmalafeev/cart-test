import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: {
      name: '',
      description: '',
      price: 0,
    },
    cartList: [],
  },
  mutations: {
    addItemToCart(state) {
      return state.cartList.push(state.cart);
    },
  },
  actions: {

  },
});
