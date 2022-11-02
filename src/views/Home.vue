<template>
  <Navigation/>
  <div class="container">
    <iframe
        :src="`https://player.vimeo.com/video/${project[1]['videoID']}?autoplay=1&title=0&color=0027FF&muted=1&controls=0&loop=1`"
        allow="autoplay; fullscreen" allowfullscreen v-if="!isLoading">
    </iframe>
    <div class="credits">
      <h1>{{ project[1].title }}</h1>
      <h2>DIR {{ project[1].DIR }}</h2>
      <h2>DOP {{ project[1].DOP }}</h2>
    </div>
  </div>
</template>

<script>
import loadContent from "@/utils/loadContent";
import Navigation from "@/components/Navigation";

export default {
  name: "Home",
  components: {Navigation},
  data() {
    return {
      isLoading: this.$store.state.projects === null,
    }
  },
  computed: {
    project() {
      return this.$store.state.landing;
    }
  },
  mounted() {
    if (this.$store.state.projects === null)
      loadContent().then(() => this.isLoading = false);

  },
  created() {
    document.title = "HOME - PROVIDENCE";
  }
}
</script>

<style scoped>

</style>