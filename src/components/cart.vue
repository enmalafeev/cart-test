<template lang="pug">
  header.header
    h1.title Корзина покупок
    .container
      cartForm
      cartTable(
        :cartList="cartList",
      )
</template>

<script>
import { mapState } from 'vuex';

import cartForm from "./cartForm.vue";
import cartTable from "./cartTable.vue";

export default {
  components: {
    cartForm,
    cartTable
  },
  computed: {
    ...mapState([
      'cartList',
      'cart'
    ]),
  },
};
</script>
