<template>
  <div>
    <!-- 左側欄 -->
    <productCard />
  </div>
</template>
<script>
import productCard from "./components/productCard.vue";
export default {
  name: "App",
  components: { productCard },
  methods: {
    // ...mapActions(["fetchLocation", "fetchPharmacies"]),
    fetchProducts(state) {
      return state.fetchProducts;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped lang="scss"></style>
