import { createStore } from "vuex";

export default createStore({
  state: {
    //存放API回傳的商品列表資訊
    products: {},
  },
  getters: {
    // products(state) {
    //   //商品
    //   return state.products;
    // },
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
      console.log(state.products);
    },
  },
  actions: {
    //取得商品資料
    fetchProducts({ commit }) {
      fetch("https://fakestoreapi.com/products?limit=5")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          commit("setProducts", json);
        });
      //   const res = await fetch("https://fakestoreapi.com/products/1");
      //透過commit來操作mutaions
    },
  },
  modules: {},
});
