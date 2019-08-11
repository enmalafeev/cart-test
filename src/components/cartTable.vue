<template lang="pug">
  b-table(
    v-show="cartList.length > 0"
    :data="cartList"
    :columns="columns"
  )
</template>

<script>
export default {
  props: {
    cartList: Array,
    default: () => []
  },
  data() {
    return {
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
  }
};
</script>
