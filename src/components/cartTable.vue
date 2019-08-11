<template lang="pug">
section
  b-table.cart-table(
    v-show="cartList.length > 0"
    :data="cartList"
    :selected.sync="selected"
    :columns="columns"
    focusable
  )
  button.button.field.is-danger.remove-btn(
    @click="removeFromCart"
  )
    span Clear selected
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    cartList: Array,
    default: () => []
  },
  data() {
    return {
      selected: this.cartList[1],
      columns: [
        {
          field: "name",
          label: "Название"
        },
        {
          field: "description",
          label: "Описание"
        },
        {
          field: "price",
          label: "Цена"
        },
        {
          field: "date",
          label: "Дата покупки",
          centered: true
        }
      ]
    };
  },
  methods: {
    ...mapMutations(["removeItemFromCart"]),
    removeFromCart() {
      this.removeItemFromCart(this.selected.name);
    }
  }
};
</script>

<style lang="scss" scoped>
// .cart-table {
//   position: relative;
// }

// .remove-btn {
//   position: absolute;
//   top: 0;
//   right: 0;
//   display: none;
//   &:hover {
//     display: visible;
//   }
// }
</style>

