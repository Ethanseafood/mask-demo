<template>
  <!-- <div class="container">
    <div class="row mt-5 text-center">
      <div>
        <h1>ROSTERS</h1>
      </div>
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in allTimePlayers" :key="player.id">
            <th scope="row">{{ index + 1 }}</th>
            <td @click="showCurrentPlayer(player.id)">
              {{ player.first_name }}
              {{ player.last_name }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> -->
  <div class="container">
    <div class="row">
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Season</th>
            <th scope="col">MIN%</th>
            <th scope="col">PTS%</th>
            <th scope="col">FGM</th>
            <th scope="col">FGA</th>
            <th scope="col">FG%</th>
            <th scope="col">3PM</th>
            <th scope="col">3PA</th>
            <th scope="col">3P%</th>
            <th scope="col">FTM</th>
            <th scope="col">FTA</th>
            <th scope="col">FT%</th>
            <th scope="col">OREB</th>
            <th scope="col">DREB</th>
            <th scope="col">REB%</th>
            <th scope="col">AST%</th>
            <th scope="col">STL%</th>
            <th scope="col">BLK%</th>
            <th scope="col">TOV%</th>
            <th scope="col">PF%</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in playerAvg" :key="player.id">
            <td>{{ player.season }}</td>
            <td>{{ player.min }}</td>
            <td>{{ player.pts }}</td>
            <td>{{ player.fgm }}</td>
            <td>{{ player.fga }}</td>
            <td>{{ player.fg_pct.toFixed(2) }}</td>
            <td>{{ player.fg3m }}</td>
            <td>{{ player.fg3a }}</td>
            <td>{{ player.fg3_pct.toFixed(2) }}</td>
            <td>{{ player.ftm }}</td>
            <td>{{ player.fta }}</td>
            <td>{{ player.ft_pct.toFixed(2) }}</td>
            <td>{{ player.oreb }}</td>
            <td>{{ player.dreb }}</td>
            <td>{{ player.reb }}</td>
            <td>{{ player.ast }}</td>
            <td>{{ player.stl }}</td>
            <td>{{ player.blk }}</td>
            <td>{{ player.turnover }}</td>
            <td>{{ player.pf }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    playerAvg() {
      return this.$store.getters.yearOfAvg;
    },
  },
  methods: {
    // showCurrentPlayer(playerID) {
    //   console.log(playerID);
    //   this.$store.commit("setCurrentPlayer", playerID);
    //   this.$router.push({ name: "playerStats" });
    // },
  },
  mounted() {
    //console.log(this.$route.params);
    console.log("playerAvg", this.$store.getters.yearOfAvg);
  },
};
</script>
<style scoped></style>
