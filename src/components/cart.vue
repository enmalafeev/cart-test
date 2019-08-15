<template lang="pug">
  header.header
    h1.title Список покупок
    .container
      cart-form
      cart-table
</template>

<script>
import cartForm from './cartForm.vue';
import cartTable from './cartTable.vue';

export default {
  components: {
    cartForm,
    cartTable,
  },
};
</script>
