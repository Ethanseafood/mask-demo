<template>
  <!-- <div class="card">
    <img :src="selected.image" alt="" style="width: 100%" />
    <h1>{{ selected.title }}</h1>
    <p class="price">${{ selected.price }}</p>
    <p>{{ selected.description }}</p>
  </div> -->

  <div>
    <h3>ROSTERS</h3>
  </div>
  <table class="table table-dark table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
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
        <th scope="row">1</th>
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
</template>

<script>
export default {
  props: ["selected"],
  methods: {},
  computed: {
    // showFilterPlayers() {
    //   return this.$store.getters.currentTeamRoster;
    // },
  },
  mounted() {
    // this.showFilterPlayers();
  },
};
</script>
<style scoped lang="scss">
// .card {
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//   max-width: 300px;
//   margin: auto;
//   text-align: center;
//   font-family: arial;
// }

// .price {
//   color: grey;
//   font-size: 22px;
// }

// .card button {
//   border: none;
//   outline: 0;
//   padding: 12px;
//   color: white;
//   background-color: #000;
//   text-align: center;
//   cursor: pointer;
//   width: 100%;
//   font-size: 18px;
// }

// .card button:hover {
//   opacity: 0.7;
// }
</style>
