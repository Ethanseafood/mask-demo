<template>
  <div class="container">
    <div class="row mt-5">
      <div>
        <h1>ROSTERS</h1>
      </div>
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">FName</th>
            <th scope="col">LName</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in allTimePlayers" :key="player.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ player.first_name }}</td>
            <td>{{ player.last_name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  computed: {
    allTimePlayers() {
      return this.$store.getters.allPlayers;
    },
  },
  mounted() {
    console.log(this.$store.getters.selectedTeamId);
    //console.log(this.$route.params);
    console.log(this.$store.getters.allPlayers);
    // console.log(this.$store.getter.currentTeamRosters);
  },
};
</script>
<style scoped lang="scss"></style>
