<template>
  <div class="container">
    <div class="row">
      <div>
        <h3>
          <!-- {{ playerStats.player.first_name }}&nbsp;{{
            playerStats.player.first_name
          }} -->
        </h3>
      </div>
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">DATE</th>
            <th scope="col">MIN</th>
            <th scope="col">PTS</th>
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
            <th scope="col">REB</th>
            <th scope="col">AST</th>
            <th scope="col">STL</th>
            <th scope="col">BLK</th>
            <th scope="col">TOV</th>
            <th scope="col">PF</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stats in selectedPlayerStats" :key="stats.id">
            <td>{{ stats.game.date }}</td>
            <td>{{ stats.min }}</td>
            <td>{{ stats.pts }}</td>
            <td>{{ stats.fgm }}</td>
            <td>{{ stats.fga }}</td>
            <td>{{ stats.fg_pct }}</td>
            <td>{{ stats.fg3m }}</td>
            <td>{{ stats.fg3a }}</td>
            <td>{{ stats.fg3_pct }}</td>
            <td>{{ stats.ftm }}</td>
            <td>{{ stats.fta }}</td>
            <td>{{ stats.ft_pct }}</td>
            <td>{{ stats.oreb }}</td>
            <td>{{ stats.dreb }}</td>
            <td>{{ stats.reb }}</td>
            <td>{{ stats.ast }}</td>
            <td>{{ stats.stl }}</td>
            <td>{{ stats.blk }}</td>
            <td>{{ stats.turnover }}</td>
            <td>{{ stats.pf }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    selectedPlayerStats() {
      return this.$store.state.mapObjectPlayers[
        this.$store.state.selectedPlayerId
      ];
      // return this.$store.state.mapObjectPlayers.get(
      //   this.$store.state.selectedPlayerId
      // );
    },
  },
  methods: {
    // date() {
    //   const dateString = "2022-12-09T00:00:00.000Z";
    //   const date = new Date(dateString);
    //   console.log(date);
    //   console.log(this.playerStats.game.date);
    // },
  },
  mounted() {
    // this.date();
    // console.log(this.$store.getters.MapPlayers[0].game.date);
  },
};
</script>
<style scoped></style>
