import { createStore } from "vuex";

export default createStore({
  state: {
    //存放API回傳的商品列表資訊
    allTeams: [],
    allPlayers: [],
    specificStats: [],
    selectedTeamId: null,
    selectedPlayerId: null,
  },
  getters: {
    selectedTeamId(state) {
      console.log("get teamId");
      return state.selectedTeamId;
    },
    selectedPlayerId(state) {
      console.log("get playerId");
      return state.selectedPlayerId;
    },
    allPlayers(state) {
      return state.allPlayers.filter(
        (player) => player.team.id == state.selectedTeamId
      );
    },
    specificStats(state) {
      console.log("get playerId");
      return state.specificStats.data.filter(
        (stats) => stats.player.id == state.selectedPlayerId
      );
    },
  },
  mutations: {
    setAllTeams(state, payload) {
      state.allTeams = payload;
    },
    setAllPlayers(state, payload) {
      state.allPlayers = payload;
      console.log("allplayers", payload);
    },
    setSpecificStats(state, payload) {
      state.specificStats = payload;
      console.log("specificStats", payload);
    },
    setCurrentTeam(state, payload) {
      state.selectedTeamId = payload;
    },
    setCurrentPlayer(state, payload) {
      state.selectedPlayerId = payload;
    },
  },
  actions: {
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

    async fetchSpecificStats({ commit }) {
      try {
        // const targetPlayerIndex = event.target;
        const res = await fetch("https://www.balldontlie.io/api/v1/stats", {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "bf0aa5de14mshc13bfb9e7ec344dp1548d9jsn45138c191d7f",
            "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
          },
        });
        const json = await res.json();
        console.log(json);
        commit("setSpecificStats", json);
      } catch (err) {
        console.error(err);
      }
    },
    // const playerRow = document.querySelector("table td tr"); //舉例
    // const playerId = playerRow.dataset.playerId; //舉例
  },
  modules: {},
});
