<template lang="pug">
  form.form
    span.error {{ validation.firstError("cart.name") }}
    input.form__input(
      type="text"
      placeholder="Название"
      name="name"
      v-model="cart.name"
    )
    span.error--desc {{ validation.firstError("cart.description") }}
    input.form__input(
      type="text"
      placeholder="Описание"
      name="description"
      v-model="cart.description"
    )
    span.error--price {{ validation.firstError("cart.price") }}
    input.form__input(
      type="number"
      placeholder="Цена"
      name="price"
      v-model="cart.price"
    )
    button.btn.btn-primary(
      type="is-info"
      @click.prevent="addToCart",
    ) Добавить
</template>

<script>
import SimpleVueValidator from 'simple-vue-validator';

import { mapState, mapMutations } from 'vuex';

const { Validator } = SimpleVueValidator;

export default {
  mixins: [SimpleVueValidator.mixin],
  validators: {
    'cart.name': function (value) {
      return Validator.value(value).required('Заполните поле');
    },
    'cart.description': function (value) {
      return Validator.value(value).required('Заполните поле');
    },
    'cart.price': function (value) {
      return Validator.value(value).required('Заполните поле');
    },
  },
  computed: {
    ...mapState(['cart', 'cartList']),
  },
  methods: {
    ...mapMutations(['addItemToCart']),
    addToCart() {
      this.$validate().then((success) => {
        if (!success) return;
        this.addItemToCart();
        this.cart.name = '';
        this.cart.description = '';
        this.cart.price = '';
        this.validation.reset();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: flex-start;
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
}
.form__input {
  display: block;
  padding-left: 10px;
  margin-right: 10px;
}
.error {
  position: absolute;
  top: -25px;
  left: 0;
  color: firebrick;
}
.error--desc {
  position: absolute;
  top: -25px;
  left: 195px;
  color: firebrick;
}
.error--price {
  position: absolute;
  top: -25px;
  left: 385px;
  color: firebrick;
}
</style>
