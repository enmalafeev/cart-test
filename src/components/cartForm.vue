<template lang="pug">
  form.form
    b-input(
      type="text"
      placeholder="Название"
      v-model="cart.name"
    )
    b-input(
      type="text"
      placeholder="Описание"
      v-model="cart.description"
    )
    b-input(
      type="number"
      placeholder="Цена"
      v-model="cart.price"
    )
    b-button(
      type="is-info"
      @click.prevent="addItemToCart"
    ) Добавить
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState([
      'cart',
      'cartList'
    ]),
  },
  methods: {
    ...mapMutations(['addItemToCart']),
  }
}
</script>


<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: flex-start;
}
</style>

