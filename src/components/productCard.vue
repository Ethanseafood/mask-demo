<template>
  <div v-for="(product, index) in products" :key="product.id">
    <p @click="showDetails(index)">{{ product.title }}</p>
  </div>
  <cardDetail v-if="item.id" :selected="item"></cardDetail>
</template>

<script>
import cardDetail from "@/components/cardDetail.vue";
export default {
  data() {
    return {
      item: {},
    };
  },
  components: { cardDetail },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    showDetails(index) {
      this.item = this.products[index];
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
