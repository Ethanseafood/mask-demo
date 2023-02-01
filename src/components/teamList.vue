<template>
  <div class="container">
    <div
      class="row justify-content-center"
      v-if="this.$store.state.allPlayers.length == 1250"
    >
      <div class="col-12 col-md-3 mt-5" v-for="team in teams" :key="team.id">
        <div>
          <h3 @click="showCurrentTeam(team.id)">
            <!--<h3 @click="showCurrentTeam(teams[index].id)">-->
            {{ team.name }}
          </h3>
        </div>
        <!-- <p @click="showDetails(index)">{{ team.name }}</p> -->
      </div>
      <!-- <cardDetail v-if="item.id" :selected="item"></cardDetail> -->
    </div>
    <div v-else>
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    teams() {
      return this.$store.state.allTeams.data;
    },
  },
  methods: {
    showCurrentTeam(teamID) {
      this.$store.commit("setCurrentTeam", teamID);
      this.$router.push({ name: "teamDetail" });
    },
  },
  mounted() {
    this.$store.dispatch("fetchAllTeams");
    this.$store.dispatch("fetchAllPlayers");
    // this.$store.dispatch("fetchAllStats");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.link {
  text-decoration: none;
  color: #000;
}
</style>
