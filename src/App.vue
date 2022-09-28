<template>
  <div>
    <!-- 左側欄 -->
    <asideMenu />
  </div>
</template>
<script>
import asideMenu from "./components/asideMenu.vue";
export default {
  name: "App",
  components: { asideMenu },
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
