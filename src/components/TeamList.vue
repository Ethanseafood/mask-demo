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
  <div class="background">
    <div class="container">
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
          <div class="button mt-3">
            <button
              @click="showPlayerBio(28)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>MO BAMBA BIO</b>
            </button>
            <button
              @click="showPlayerStats(28)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>PLAYER STATS</b>
            </button>
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Beasley_1040x1210_2.jpg"
            />
          </div>
          <div class="button mt-3">
            <button
              @click="showPlayerBio(38)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>MALIK BEASLEY BIO</b>
            </button>
            <button
              @click="showPlayerStats(38)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>PLAYER STATS</b>
            </button>
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_BrownJr_1040x1210.webp"
            />
          </div>
          <div class="button mt-3">
            <button
              @click="showPlayerBio(68)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>TROY BROWN JR. BIO</b>
            </button>
            <button
              @click="showPlayerStats(68)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>PLAYER STATS</b>
            </button>
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Christie_v2_1040x1210.webp"
            />
          </div>
          <div class="button mt-3">
            <button
              @click="showPlayerBio(38017697)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>MAX CHRISTIE BIO</b>
            </button>
            <button
              @click="showPlayerStats(38017697)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>PLAYER STATS</b>
            </button>
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Davis_1040x1210.webp"
            />
          </div>
          <div class="button mt-3">
            <button
              @click="showPlayerBio(117)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>ANTHONY DAVIS BIO</b>
            </button>
            <button
              @click="showPlayerStats(117)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>PLAYER STATS</b>
            </button>
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Gabriel_1040x1210.webp"
            />
          </div>
          <div class="button mt-3">
            <button
              @click="showPlayerBio(166)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>WENYEN GABRIEL BIO</b>
            </button>
            <button
              @click="showPlayerStats(166)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>PLAYER STATS</b>
            </button>
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Hachimura_1040x1210.avif"
            />
          </div>
          <div class="button mt-3">
            <button
              @click="showPlayerBio(666609)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>RUI HACHIMURA BIO</b>
            </button>
            <button
              @click="showPlayerStats(666609)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>PLAYER STATS</b>
            </button>
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_James_1040x1210.webp"
            />
          </div>
          <div class="button mt-3">
            <button
              @click="showPlayerBio(237)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>LEBRON JAMES BIO</b>
            </button>
            <button
              @click="showPlayerStats(237)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>PLAYER STATS</b>
            </button>
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Reaves_1040x1210.webp"
            />
          </div>
          <div class="button mt-3">
            <button
              @click="showPlayerBio(17553995)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>AUSTIN REAVERS BIO</b>
            </button>
            <button
              @click="showPlayerStats(17553995)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>PLAYER STATS</b>
            </button>
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Reed_1040x1210.jpg"
            />
          </div>
          <div class="button mt-3">
            <button
              @click="showPlayerBio(390)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>DAVON REED BIO</b>
            </button>
            <button
              @click="showPlayerStats(390)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>PLAYER STATS</b>
            </button>
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Russell_1040x1210.jpg"
            />
          </div>
          <div class="button mt-3">
            <button
              @click="showPlayerBio(405)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>D'ANGELO RUSSELL BIO</b>
            </button>
            <button
              @click="showPlayerStats(405)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>PLAYER STATS</b>
            </button>
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImage_Schroder_1040x1210.webp"
            />
          </div>
          <div class="button mt-3">
            <button
              @click="showPlayerBio(409)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>DENNIS SCHRÖDER BIO</b>
            </button>
            <button
              @click="showPlayerStats(409)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>PLAYER STATS</b>
            </button>
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Vanderbilt_1040x1210.jpg"
            />
          </div>
          <div class="button mt-3">
            <button
              @click="showPlayerBio(457)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>JARRED VANDERBILT BIO</b>
            </button>
            <button
              @click="showPlayerStats(457)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>PLAYER STATS</b>
            </button>
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Walker_v2_1040x1210.webp"
            />
          </div>
          <div class="button mt-3">
            <button
              @click="showPlayerBio(464)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>LONNIE WALKER IV BIO</b>
            </button>
            <button
              @click="showPlayerStats(464)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>PLAYER STATS</b>
            </button>
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_PippenJr_v2_1040x1210.webp"
            />
          </div>
          <div class="button mt-3">
            <button
              @click="showPlayerBio(38017656)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>SCOTTY PIPPEN JR. BIO</b>
            </button>
            <button
              @click="showPlayerStats(38017656)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>PLAYER STATS</b>
            </button>
          </div>
        </div>
        <div class="col-md">
          <div>
            <img
              class="img"
              src="../assets/LAKERS/2223_RosterImageUpdate_Swider_v2_1040x1210.webp"
            />
          </div>
          <div class="button mt-3">
            <button
              @click="showPlayerBio(38017736)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>COLE SWIDER BIO</b>
            </button>
            <button
              @click="showPlayerStats(38017736)"
              type="button"
              class="btn btn-light btn-lg m-3"
            >
              <b>PLAYER STATS</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
  methods: {
    showPlayerBio(playerID) {
      this.$store.commit("setCurrentPlayer", playerID);
      // console.log(this.$store.getters.selectedPlayerId);
      this.$router.push({ name: "playerStats" });
    },
    showPlayerStats(playerID) {
      this.$store.commit("setCurrentPlayer", playerID);
      // console.log(this.$store.getters.selectedPlayerId);
      this.$router.push({ name: "teamDetail" });
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
  width: 100%;
}
.background {
  background-color: rgb(36, 36, 36);
  margin-left: 10%;
  margin-right: 10%;
}
.button {
  text-align: center;
}
.btn {
  border-radius: 25px;
}
</style>
