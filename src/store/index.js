import { createStore } from "vuex";

export default createStore({
  state: {
    //存放API回傳的商品列表資訊
    products: [],
    liveGameData: [],
    allTeams: [],
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
    setNBALiveData(state, payload) {
      state.liveGameData = payload;
    },
    setAllTeams(state, payload) {
      state.allTeams = payload;
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

    async fetchAllTeams({ commit }) {
      try {
        const res = await fetch("https://www.balldontlie.io/api/v1/teams", {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "bf0aa5de14mshc13bfb9e7ec344dp1548d9jsn45138c191d7f",
            "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
          },
        });
        const json = await res.json();
        console.log(json);
        commit("setAllTeams", json);
      } catch (err) {
        console.error(err);
      }
    },

    async fetchLiveGameData({ commit }) {
      try {
        const res = await fetch(
          "https://free-nba.p.rapidapi.com/players?page=0&per_page=25",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "bf0aa5de14mshc13bfb9e7ec344dp1548d9jsn45138c191d7f",
              "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
            },
          }
        );
        const json = await res.json();
        // console.log(json);
        commit("setNBALiveData", json);
      } catch (err) {
        console.error(err);
      }
    },
  },

  //透過commit來操作mutaions
  // addProducts({ commit }) {
  //   fetch("https://fakestoreapi.com/products", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: this.title,
  //       price: parseInt(this.price, 10),
  //       description: this.description,
  //       image: "https://i.pravatar.cc",
  //       category: "electronic",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  //   commit("createProducts");
  // },
  modules: {},
});
