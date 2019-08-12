<template lang="pug">
section
  b-table.cart-table(
    v-show="cartList.length > 0"
    :data="cartList"
    :columns="columns"
    :checked-rows.sync="checkedRows"
    checkable
    :checkbox-position="checkboxPosition"
  )
  button.button.field.is-danger.remove-btn(
    @click="removeFromCart"
    :disabled="!checkedRows.length"
  )
    span Clear selected
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: {
    cartList: Array,
    default: () => [],
  },
  data() {
    return {
      // selected: this.cartList[1],
      checkboxPosition: 'left',
      checkedRows: [],
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
  created() {
    if (localStorage.cart.length === 0) return;
    this.getCartListFromLocalStorage();
  }, 
  methods: {
    ...mapMutations(["removeItemFromCart", "getCartListFromLocalStorage"]),
    removeFromCart() {
      this.removeItemFromCart(this.checkedRows);
    }
  }
};
</script>

