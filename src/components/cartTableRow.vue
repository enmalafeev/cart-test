<template lang="pug">
  tr(
    :class="{checked: cartRow.checked}")
    td
      input(
        type="checkbox"
        @change="checkProduct"
        :checked="cartRow.checked")
    td
      input(type="text" v-model="cartRow.name")
    td
      input(type="text" v-model="cartRow.description")
    td
      input(type="text" v-model="cartRow.price")
    td {{ cartRow.date }}
    td
      button.btn.btn-danger(
        @click="removeFromCart"
      ) Удалить
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    cartRow: Object,
    default: () => Object
  },
  methods: {
    ...mapMutations([
      "checkItem",
      "removeItemFromCart"
    ]),
    checkProduct(e) {
      const product = {
        ...this.cartRow,
        checked: e.target.checked
      };
      this.checkItem(product);
    },
    removeFromCart() {
      this.removeItemFromCart(this.cartRow.id);
    }
  },
}
</script>

<style lang="scss" scoped>
input {
  font-size: 16px;
  border: transparent;
  background-color: transparent;
}
.checked {
  background-color: #e9ecef;
}
</style>
