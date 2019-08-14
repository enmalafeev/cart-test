<template lang="pug">
section(v-show="this.cartList.length > 0")
  table.table.table-striped
    thead
      tr
        th(v-for="column in this.columns") {{ column.label }}
      tr(
        v-for="item in cartList"
        :class="{checked: item.checked}")
        td
          input(
            type="checkbox"
            @change="checkProduct"
            :checked="item.checked")
        td {{ item.id }}
        td
          input(type="text" v-model="item.name")
        td
          input(type="text" v-model="item.description")
        td
          input(type="text" v-model="item.price")
        td {{ item.date }}
  button.btn.btn-danger(type="button" @click="removeFromCart") Удалить выбранные
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      edited: false,
      columns: [
        {
          label: ""
        },
        {
          label: "Название"
        },
        {
          label: "Описание"
        },
        {
          label: "Цена"
        },
        {
          label: "Дата покупки"
        }
      ]
    };
  },
  created() {
    if (localStorage.cart.length === 0) return;
    this.getCartListFromLocalStorage();
  },
  computed: {
    ...mapState({
      cart: state => state.cart,
      cartList: state => state.cartList
    })
  },
  methods: {
    ...mapMutations([
      "removeItemFromCart",
      "getCartListFromLocalStorage",
      "checkItem"
    ]),
    checkProduct(e) {
      const product = {
        ...this.cart,
        checked: e.target.checked
      };
      this.checkItem(product);
    },
    removeFromCart() {
      this.removeItemFromCart(this.cart.id);
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  font-size: 16px;
  border: transparent;
}
.checked {
  background-color: #e9ecef;
}
</style>


