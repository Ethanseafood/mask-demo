<template>
  <div class="card" v-for="p in products" :key="p.id">
    <img :src="p.image" alt="" style="width: 100%" />
    <h1>{{ p.title }}</h1>
    <p class="price">${{ p.price }}</p>
    <p>{{ p.description }}</p>
    <p><button>Add to Cart</button></p>
  </div>
</template>

<script>
export default {
  name: "asideMenu",
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
</style>
