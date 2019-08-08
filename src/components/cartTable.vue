<template lang="pug">
  b-table(
    :data="data"
    :columns="columns"
  )
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: "Apple Iphone",
          description: "настощий яблоный смартфон",
          price: "78550",
          date: "09.08.2019"
        }
      ],
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
