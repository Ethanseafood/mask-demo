import { createStore } from "vuex";

export default createStore({
  state: {
    //存放API回傳的商品列表資訊
    products: [],
  },
  getters: {
    // products: (state) {
    //   //商品
    //   return state.products;
    // },
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
      // console.log(state.products);
    },
    createProducts(state, payload) {
      state.products.push(payload);
    },
  },
  actions: {
    //取得商品資料
    // fetchProducts({ commit }) {
    // fetch("https://fakestoreapi.com/products?limit=5")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log(json);
    //     commit("setProducts", json);
    //   });
    async fetchProducts({ commit }) {
      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();
      // console.log(json);
      commit("setProducts", json);
    },
    //透過commit來操作mutaions
    addProducts({ commit }) {
      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          price: parseInt(this.price, 10),
          description: this.description,
          image: "https://i.pravatar.cc",
          category: "electronic",
        }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
      commit("createProducts");
    },
  },
  modules: {},
});
