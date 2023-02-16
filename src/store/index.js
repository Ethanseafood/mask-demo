import { createStore } from "vuex";

export default createStore({
  state: {
    mapObjectPlayers: {},
    yearOfAvg: [],
    selectedPlayerId: "",
  },
  getters: {
    selectedPlayerId(state) {
      // console.log("get selected playerId", state.selectedPlayerId);

      return state.selectedPlayerId;
    },
    // mapPlayers(state) {
    //   console.log("get playerId", state.mapPlayers);

    //   return state.mapPlayers.get(state.selectedPlayerId);

    // return state.allPlayers.filter(
    //   (dataPlayer) => dataPlayer.player.id == state.selectedPlayerId
    // );
    // },
    yearOfAvg(state) {
      // console.log("get playerId", state.yearOfAvg);
      return state.yearOfAvg.data.filter(
        (dataStats) => dataStats.player_id == state.selectedPlayerId
      );
    },
  },
  mutations: {
    setGroupedPlayers(state, payload) {
      state.mapObjectPlayers = payload;
      console.log("mapObjectPlayers", payload);
    },
    setYearOfAvg(state, payload) {
      state.yearOfAvg = payload;
    },
    setCurrentPlayer(state, payload) {
      let input = payload.toString();
      state.selectedPlayerId = input;
      // console.log("mutation current player", input);
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
      let playerJson = [];
      for (let i = 1; i < 27; i++) {
        try {
          // const targetPlayerIndex = event.target;
          const res = await fetch(
            `https://www.balldontlie.io/api/v1/stats?seasons[]=2022&player_ids[]=28&player_ids[]=38&player_ids[]=68&player_ids[]=38017697&player_ids[]=117&player_ids[]=166&player_ids[]=666609&player_ids[]=237&player_ids[]=17553995&player_ids[]=390&player_ids[]=405&player_ids[]=409&player_ids[]=457&player_ids[]=464&player_ids[]=38017656&player_ids[]=38017736&page=${String(
              i
            )}`,
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
          playerJson = playerJson.concat(json.data);
        } catch (err) {
          console.error(err);
        }
      }
      //資料落地後執行
      //這段為了取代ALLPLAYERS，allPlayers-> allPlayersMap
      // allPlayersMap("playerId")

      // const arr = [
      //   { id: 1, name: "apple", category: "fruit" },
      //   { id: 2, name: "banana", category: "fruit" },
      //   { id: 3, name: "carrot", category: "vegetable" },
      //   { id: 4, name: "tomato", category: "vegetable" },
      //   { id: 5, name: "pear", category: "fruit" },
      // ];
      const groupedPlayers = playerJson.reduce((result, current) => {
        const currentPlayerId = current.player.id.toString();
        if (!result[currentPlayerId]) {
          result[currentPlayerId] = [];
        }
        result[currentPlayerId].push(current);
        return result;
      }, {});

      // console.log(groupedPlayers);
      // output: { fruit: [
      //             { id: 1, name: 'apple', category: 'fruit' },
      //             { id: 2, name: 'banana', category: 'fruit' },
      //             { id: 5, name: 'pear', category: 'fruit' }
      //           ],
      //           vegetable: [
      //             { id: 3, name: 'carrot', category: 'vegetable' },
      //             { id: 4, name: 'tomato', category: 'vegetable' }
      //           ]
      //         }
      commit("setGroupedPlayers", groupedPlayers);
    },

    async fetchYearOfAvg({ commit }) {
      try {
        const res = await fetch(
          "https://www.balldontlie.io/api/v1/season_averages?seasons[]=2022&player_ids[]=28&player_ids[]=38&player_ids[]=68&player_ids[]=38017697&player_ids[]=117&player_ids[]=166&player_ids[]=666609&player_ids[]=237&player_ids[]=17553995&player_ids[]=390&player_ids[]=405&player_ids[]=409&player_ids[]=457&player_ids[]=464&player_ids[]=38017656&player_ids[]=38017736",
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
        // console.log("YearOfAvg", json);
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
