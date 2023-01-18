import { createStore } from "vuex";

export default createStore({
  state: {
    //存放API回傳的商品列表資訊
    products: [],
    liveGameData: [],
    allTeams: [],
    allPlayers: [],
    selectedTeamId: null,
  },
  getters: {
    currentTeamRoster(state) {
      console.log(state.allPlayers);
      console.log(state.selectedTeamId);
      return state.allPlayers.filter(
        (player) => player.team.id == state.selectedTeamId
      );
    },
    selectedTeamId(state) {
      console.log("get teamId");
      return state.selectedTeamId;
    },
    allPlayers(state) {
      return state.allPlayers.filter(
        (player) => player.team.id == state.selectedTeamId
      );
    },
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
    setAllPlayers(state, payload) {
      // state.allPlayers = payload;
      state.allPlayers = payload;
      console.log("allplayers", payload);
    },
    setCurrentTeam(state, payload) {
      console.log("set teamId");
      state.selectedTeamId = payload;
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
        // console.log(json);
        commit("setAllTeams", json);
      } catch (err) {
        console.error(err);
      }
    },

    async fetchAllPlayers({ commit }) {
      let json = {};
      // 因為res傳傳結果是物件{data,meta},這裡只取data並處理成陣列
      let playersJson = [];
      // 因為一次只給25個球員資料，為了get所有球員資料所以要for loop
      for (let i = 1; i < 51; i++) {
        try {
          const res = await fetch(
            `https://www.balldontlie.io/api/v1/players/?page=${String(i)}`,
            {
              method: "GET",
              headers: {
                "X-RapidAPI-Key":
                  "bf0aa5de14mshc13bfb9e7ec344dp1548d9jsn45138c191d7f",
                "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
              },
            }
          );
          json = await res.json();
          playersJson = playersJson.concat(json.data);
        } catch (err) {
          console.error(err);
        }
      }
      commit("setAllPlayers", playersJson);
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
