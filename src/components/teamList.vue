<template>
  <div class="container">
    <div class="row">
      <div
        class="col-12 col-md-3 mt-5"
        v-for="(team, index) in teams"
        :key="team.id"
      >
        <div>
          <h3 @click="showCurrentTeam(teams[index].id)">
            {{ team.name }} {{ team.id }}
          </h3>
        </div>
        <!-- <p @click="showDetails(index)">{{ team.name }}</p> -->
      </div>
      <!-- <cardDetail v-if="item.id" :selected="item"></cardDetail> -->
    </div>
  </div>
</template>

<script>
// import cardDetail from "@/components/cardDetail.vue";
export default {
  data() {
    return {
      // item: {},
      filteredPlayers: [],
    };
  },
  // components: { cardDetail },
  computed: {
    teams() {
      return this.$store.state.allTeams.data;
    },
  },
  methods: {
    showCurrentTeam(teamID) {
      this.$store.commit("setCurrentTeam", teamID);
      this.filteredPlayers = this.$store.getters.currentTeamRoster;
      console.log(this.filteredPlayers);
      // router.push({ path: "teamDetail" });
    },
  },
  mounted() {
    this.$store.dispatch("fetchAllTeams");
    this.$store.dispatch("fetchAllPlayers");
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
