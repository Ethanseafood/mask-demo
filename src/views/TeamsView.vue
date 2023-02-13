<template>
  <div>
    <TeamList> </TeamList>
  </div>
</template>

<script>
import TeamList from "@/components/TeamList";
export default {
  components: { TeamList },
  mounted() {
    this.$store.dispatch("fetchLakersPlayers");
    this.$store.dispatch("fetchYearOfAvg");
  },
};
</script>
