<template>
  <div class="container">
    <div class="row">
      <div>
        <h3>ROSTERS</h3>
      </div>
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Player</th>
            <th scope="col">POS</th>
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
          <tr>
            <td>Joel Embiid</td>
            <td>F-C</td>
            <td>36:49</td>
            <td>23</td>
            <td>9</td>
            <td>21</td>
            <td>0.429</td>
            <td>1</td>
            <td>4</td>
            <td>0.25</td>
            <td>4</td>
            <td>5</td>
            <td>0.8</td>
            <td>2</td>
            <td>8</td>
            <td>10</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td>5</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  computed: {
    liveGames() {
      return this.$store.liveGameData;
    },
  },
};
</script>
<style scoped></style>
