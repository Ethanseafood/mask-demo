<template>
  <div class="container">
    <div class="row">
      <div>
        <h3>stats</h3>
      </div>
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">DATE</th>
            <th scope="col">Season</th>
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
          <tr v-for="stats in playerStats" :key="stats.player.id">
            <td>{{ stats.game.date }}</td>
            <td>{{ stats.game.season }}</td>
            <td>{{ stats.min }}</td>
            <td>{{ stats.pts }}</td>
            <td>{{ stats.fgm }}</td>
            <td>{{ stats.fga }}</td>
            <td>{{ stats.fg_pct.toFixed(2) }}</td>
            <td>{{ stats.fg3m }}</td>
            <td>{{ stats.fg3a }}</td>
            <td>{{ stats.fg3_pct.toFixed(2) }}</td>
            <td>{{ stats.ftm }}</td>
            <td>{{ stats.fta }}</td>
            <td>{{ stats.ft_pct.toFixed(2) }}</td>
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
    playerStats() {
      return this.$store.getters.allPlayers;
    },
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped lang="scss"></style>
