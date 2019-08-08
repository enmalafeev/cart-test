<template lang="pug">
  form.form
    b-input(
      type="text"
      placeholder="Название"
    )
    b-input(
      type="text"
      placeholder="Описание"
    )
    b-input(
      type="number"
      placeholder="Цена"
    )
    b-button(
      type="is-info"
    ) Добавить
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: flex-start;
}
</style>

