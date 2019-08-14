import Vue from 'vue';
import Vuex from 'vuex';
import { differenceBy } from 'lodash';

Vue.use(Vuex);

let uniqId = 0;
export default new Vuex.Store({
  state: {
    cart: {
      id: 0,
      checked: false,
      name: '',
      description: '',
      price: '',
      date: '',
    },
    cartList: [],
  },
  mutations: {
    addItemToCart(state) {
      uniqId += 1;
      state.cartList.push(
        {
          ...state.cart,
          date: new Date().toLocaleString(),
          id: uniqId,
        },
      );
      localStorage.setItem('cart', JSON.stringify(state.cartList));
    },
    checkItem(state, item) {
      state.cartList = state.cartList.map(el => (el.id === item.id ? item : el));
    },
    getCartListFromLocalStorage(state) {
      state.cartList = JSON.parse(localStorage.getItem('cart' || []));
    },
    removeItemFromCart(state, productId) {
      console.log(productId);
      state.cartList = state.cartList.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(state.cartList));
    },
  },
});
