<template>
  <Navigation/>
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