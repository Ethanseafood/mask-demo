import { createStore } from "vuex";

export default createStore({
  state: {
    allPlayers: [],
    yearOfAvg: [],
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
    YearOfAvg(state) {
      console.log("get playerId");
      return state.allPlayers.data.filter(
        (stats) => stats.player.id == state.selectedPlayerId
      );
    },
  },
  mutations: {
    setAllPlayers(state, payload) {
      state.allPlayers = payload;
      console.log("all players", payload);
    },
    setYearOfAvg(state, payload) {
      state.yearOfAvg = payload;
    },
    setCurrentTeam(state, payload) {
      state.selectedTeamId = payload;
    },
    setCurrentPlayer(state, payload) {
      state.selectedPlayerId = payload;
    },
  },
  actions: {
    // async fetchAllTeams({ commit }) {
    //   try {
    //     const res = await fetch("https://www.balldontlie.io/api/v1/teams", {
    //       method: "GET",
    //       headers: {
    //         "X-RapidAPI-Key":
    //           "bf0aa5de14mshc13bfb9e7ec344dp1548d9jsn45138c191d7f",
    //         "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
    //       },
    //     });
    //     const json = await res.json();
    //     // console.log("ALLTEAMS", json);
    //     commit("setAllTeams", json);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },

    async fetchLakersPlayers({ commit }) {
      let json = {};
      let playerjson = [];
      for (let i = 0; i < 38; i++) {
        try {
          // const targetPlayerIndex = event.target;
          const res = await fetch(
            "https://www.balldontlie.io/api/v1/stats/?seasons[]=2022&seasons[]=2023&player_ids[]=28&player_ids[]=38&player_ids[]=68&player_ids[]=38017697&player_ids[]=117&player_ids[]=166&player_ids[]=666609&player_ids[]=237&player_ids[]=17553995&player_ids[]=390&player_ids[]=405&player_ids[]=409&player_ids[]=457&player_ids[]=464&player_ids[]=38017656&player_ids[]=38017736",
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
          playerjson = playerjson.concat(json.data);
        } catch (err) {
          console.error(err);
        }
      }
      commit("setAllPlayers", playerjson);
    },

    async fetchYearOfAvg({ commit }) {
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
        console.log("YearOfAvg", json);
        commit("setYearOfAvg", json);
      } catch (err) {
        console.error(err);
      }
    },
    // const playerRow = document.querySelector("table td tr"); //舉例
    // const playerId = playerRow.dataset.playerId; //舉例
  },
  modules: {},
});
