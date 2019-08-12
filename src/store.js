import Vue from 'vue';
import Vuex from 'vuex';
import { differenceBy } from 'lodash';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: {
      name: '',
      description: '',
      price: '',
      date: '',
    },
    cartList: [],
  },
  mutations: {
    addItemToCart(state) {
      state.cartList.push(
        {
          ...state.cart,
          date: new Date().toLocaleString(),
        },
      );
      localStorage.setItem('cart', JSON.stringify(state.cartList));
    },
    getCartListFromLocalStorage(state) {
      state.cartList = JSON.parse(localStorage.getItem('cart' || []));
    },
    removeItemFromCart(state, itemNames) {
      state.cartList = differenceBy(state.cartList, itemNames, 'name');
      localStorage.setItem('cart', JSON.stringify(state.cartList));
    },
  },
});
