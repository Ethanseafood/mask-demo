<template>
  <div class="container">
    <div class="row">
      <div
        class="col-12 col-md-3 mt-5"
        v-for="team in teams.data"
        :key="team.id"
      >
        <div>
          <router-link to="@cardDetail" class="link">
            <h3>{{ team.name }}</h3></router-link
          >
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
    };
  },
  // components: { cardDetail },
  computed: {
    teams() {
      return this.$store.state.allTeams;
    },
  },
  methods: {
    // showCurrentTeam(index) {
    //   this.item = this.teams.data[index];
    // },
  },
  mounted() {
    this.$store.dispatch("fetchAllTeams");
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
