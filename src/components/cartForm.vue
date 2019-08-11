<template lang="pug">
  form.form
    span.error {{ validation.firstError("cart.name") }}
    b-input.form__input(
      type="text"
      placeholder="Название"
      name="name"
      v-model="cart.name"
    )
    span.error--desc {{ validation.firstError("cart.description") }}
    b-input(
      type="text"
      placeholder="Описание"
      name="description"
      v-model="cart.description"
    )
    span.error--price {{ validation.firstError("cart.price") }}
    b-input(
      type="number"
      placeholder="Цена"
      name="price"
      v-model="cart.price"
    )
    b-button(
      type="is-info"
      @click.prevent="addToCart",
    ) Добавить
</template>

<script>
import { Validator } from "simple-vue-validator";
import { mapState, mapMutations } from "vuex";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "cart.name"(value) {
      return Validator.value(value).required("Заполните поле");
    },
    "cart.description"(value) {
      return Validator.value(value).required("Заполните поле");
    },
    "cart.price"(value) {
      return Validator.value(value).required("Заполните поле");
    }
  },
  computed: {
    ...mapState(["cart", "cartList"])
  },
  // parseFloat(str).toLocaleString('ru-RU');
  methods: {
    ...mapMutations(["addItemToCart"]),
    addToCart() {
      this.$validate().then(success => {
        if (!success) return;
        this.addItemToCart();
        this.cart.name = "";
        this.cart.description = "";
        this.cart.price = "";
        this.validation.reset();
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: flex-start;
}

.form__input {
  display: block;
  position: relative;
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
  left: 190px;
  color: firebrick;
}
.error--price {
  position: absolute;
  top: -25px;
  left: 375px;
  color: firebrick;
}
</style>

