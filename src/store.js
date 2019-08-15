import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: {
      id: '',
      checked: false,
      name: '',
      description: '',
      price: '',
      date: '',
    },
    cartList: [],
  },
  mutations: {
    addToLocalStorage(state) {
      localStorage.setItem('cart', JSON.stringify(state.cartList));
    },
    addItemToCart(state) {
      state.cartList.push(
        {
          ...state.cart,
          date: new Date().toLocaleString(),
          id: Math.random().toString(36).slice(2),
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
      state.cartList = state.cartList.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(state.cartList));
    },
  },
});
