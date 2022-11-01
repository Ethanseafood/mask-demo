<template>
  <div class="container">
    <form>
      <label for="title">Title:</label><br />
      <input v-model="title" type="text" /><br />
      <label for="description">Description:</label><br />
      <input v-model="description" type="text" /><br />
      <label for="image">Image:</label><br />
      <input type="text" value="https://i.pravatar.cc" /><br />
      <label for="price">Price:</label><br />
      <input v-model="price" type="text" /><br /><br />
      <button @click="addData">Add to Products</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      price: "",
    };
  },
  methods: {
    addData() {
      console.log("add data");
      this.$store.dispatch("addProducts");
    },
  }, // end of method
};
</script>
