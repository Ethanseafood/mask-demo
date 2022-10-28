<template>
  <div class="card">
    <img :src="selected.image" alt="" style="width: 100%" />
    <h1>{{ selected.title }}</h1>
    <p class="price">${{ selected.price }}</p>
    <p>{{ selected.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["selected"],
};
</script>
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
