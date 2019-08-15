<template lang="pug">
section(v-show="this.cartList.length > 0")
  table.table.table-striped
    thead
      tr
        th(v-for="column in this.columns") {{ column.label }}
      cart-table-row(
        v-for="cartRow in cartList"
        :cartRow="cartRow")
</template>

<script>
import { mapMutations, mapState } from "vuex";
import cartTableRow from './cartTableRow.vue'

export default {
  components: {
    cartTableRow
  },
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
    if (!localStorage.cart) return;
    this.getCartListFromLocalStorage();
  },
  computed: {
    ...mapState({
      cartList: state => state.cartList
    })
  },
  methods: {
    ...mapMutations([
      "getCartListFromLocalStorage",
    ]),
  }
};
</script>


