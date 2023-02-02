<template>
  <div class="container">
    <div class="row mt-5 text-center">
      <div>
        <h1>ROSTERS</h1>
      </div>

      <!-- <li v-for="player in allTimePlayers" :key="player.id">
        <h1 @click="showCurrentPlayer(player.id)">
          {{ player.first_name }}
        </h1>
      </li> -->

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
  </div>
</template>

<script>
export default {
  computed: {
    allTimePlayers() {
      return this.$store.getters.allPlayers;
    },
  },
  methods: {
    showCurrentPlayer(playerID) {
      console.log(playerID);
      this.$store.commit("setCurrentPlayer", playerID);
      this.$router.push({ name: "playerStats" });
    },
  },
  mounted() {
    this.$store.dispatch("fetchSpecificStats");
    console.log(this.$store.getters.selectedTeamId);
    //console.log(this.$route.params);
    console.log(this.$store.getters.allPlayers);
  },
};
</script>
<style scoped lang="scss"></style>
