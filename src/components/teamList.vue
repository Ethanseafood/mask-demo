<template>
  <!-- <div class="container">
    <div class="row justify-content-center">
      <div class="mt-5" v-if="this.$store.state.allPlayers.length == 1250">
        <h1><b> Loading...</b></h1>
      </div>
      <div class="col-12 col-md-3 mt-5" v-for="team in teams" :key="team.id">
        <div>
          <h3 @click="showCurrentTeam(team.id)">
            {{ team.name }}
          </h3>
        </div>
        <p @click="showDetails(index)">{{ team.name }}</p>
      </div>
    </div>
  </div> -->
  <div class="container">
    <div class="background">
      <div
        class="g-5 mt-5 row row-cols-md-2 row-cols-lg-3 justify-content-start"
      >
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Bamba_1040x1210.jpg"
            />
          </div>
          <div class="container">
            <div class="row">
              <div>
                <button type="button" class="btn btn-light">Light</button>
              </div>
              <div>
                <button type="button" class="btn btn-light">Light</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Beasley_1040x1210_2.jpg"
            />
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_BrownJr_1040x1210.webp"
            />
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Christie_v2_1040x1210.webp"
            />
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Davis_1040x1210.webp"
            />
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Gabriel_1040x1210.webp"
            />
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Hachimura_1040x1210.avif"
            />
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_James_1040x1210.webp"
            />
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Reaves_1040x1210.webp"
            />
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Reed_1040x1210.jpg"
            />
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Russell_1040x1210.jpg"
            />
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImage_Schroder_1040x1210.webp"
            />
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Vanderbilt_1040x1210.jpg"
            />
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Walker_v2_1040x1210.webp"
            />
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_PippenJr_v2_1040x1210.webp"
            />
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Swider_v2_1040x1210.webp"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    this.$store.dispatch("fetchSpecificStats");
    this.$store.dispatch("fetchLakersPlayers");
    // this.$store.dispatch("fetchAllStats");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img {
  width: 100%;
}
.row {
  padding: 5%;
}
.background {
  background-color: rgb(36, 36, 36);
}
</style>
