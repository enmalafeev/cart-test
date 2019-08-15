<template lang="pug">
  header.header
    h1.title Корзина покупок
    .container
      cart-form
      cart-table
</template>

<script>
import { mapState } from "vuex";

import cartForm from "./cartForm.vue";
import cartTable from "./cartTable.vue";

export default {
  components: {
    cartForm,
    cartTable
  }
};
</script>
