<template lang="pug">
  header.header
    h1.title Корзина покупок
    .container
      cartForm
      cartTable
</template>

<script>
import cartForm from "./cartForm.vue";
import cartTable from "./cartTable.vue";

export default {
  components: {
    cartForm,
    cartTable
  }
};
</script>
