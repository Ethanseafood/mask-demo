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
    },
    setSpecificStats(state, payload) {
      state.specificStats = payload;
      // console.log("specificStats", payload);
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
        console.log("ALLTEAMS", json);
        commit("setAllTeams", json);
      } catch (err) {
        console.error(err);
      }
    },

    async fetchLakersPlayers({ commit }) {
      try {
        const res = await fetch(
          "https://www.balldontlie.io/api/v1/season_averages/?seasons[]=2022&seasons[]=2023&player_ids[]=237&player_ids[]=17553995&player_ids[]=117&player_ids[]=248&player_ids[]=409&player_ids[]=666925&player_ids[]=464&player_ids[]=38017697&player_ids[]=45&player_ids[]=666609&player_ids[]=472&player_ids[]=38017656&player_ids[]=74&player_ids[]=68&player_ids[]=166",
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
        console.log("LAKERS", json);
        commit("setAllPlayers", json);
      } catch (err) {
        console.error(err);
      }
    },

    async fetchSpecificStats({ commit }) {
      try {
        // const targetPlayerIndex = event.target;
        const res = await fetch(
          "https://www.balldontlie.io/api/v1/stats/?seasons[]=2022&seasons[]=2023&player_ids[]=237&player_ids[]=17553995&player_ids[]=117&player_ids[]=248&player_ids[]=409&player_ids[]=666925&player_ids[]=464&player_ids[]=38017697&player_ids[]=45&player_ids[]=666609&player_ids[]=472&player_ids[]=38017656&player_ids[]=74&player_ids[]=68&player_ids[]=166",
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
        console.log("STATS", json);
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
