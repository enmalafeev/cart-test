<template lang="pug">
section(v-show="cartList.length > 0")
  b-table.cart-table(
    :data="cartList"
    :columns="columns"
    :checked-rows.sync="checkedRows"
    checkable
    focusable
    :checkbox-position="checkboxPosition"
    :selected.sync="selected"
  )
  button.button.field.is-danger.remove-btn(
    @click="removeFromCart"
    :disabled="!checkedRows.length"
  )
    span Удалить выбранные
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: {
    cartList: Array,
    default: () => []
  },
  data() {
    return {
      edited: false,
      selected: this.cartList[1],
      checkboxPosition: "left",
      checkedRows: [],
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
  created() {
    if (localStorage.cart.length === 0) return;
    this.getCartListFromLocalStorage();
  },
  computed: {
    ...mapState(["cart"])
  },
  methods: {
    ...mapMutations(["removeItemFromCart", "getCartListFromLocalStorage"]),
    removeFromCart() {
      this.removeItemFromCart(this.checkedRows);
    }
  }
};
</script>

