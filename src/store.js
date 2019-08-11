import Vue from 'vue';
import Vuex from 'vuex';

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
    removeItemFromCart(state, itemName) {
      state.cartList = state.cartList.filter(item => item.name !== itemName);
      localStorage.setItem('cart', JSON.stringify(state.cartList));
    },
  },
});
