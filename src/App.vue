<template lang="pug">
  div(id="app")
    cart
</template>

<script>
import cart from './components/cart.vue';

export default {
  name: 'app',
  components: {
    cart,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
