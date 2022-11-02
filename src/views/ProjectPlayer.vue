<template>
  <div class="loading" v-if="isLoading">
    <LoadingIndicator/>
  </div>
  <div class="container" v-else>
    <router-link to="/work">
      <h1>← See all projects</h1>
    </router-link>
    <div class="video">
      <iframe
          :src="`https://player.vimeo.com/video/${project['videoID']}?autoplay=1&title=0&color=0027FF`"
          allow="autoplay; fullscreen" allowfullscreen>
      </iframe>
      <div class="desc">
        <h1>{{ project.title }}</h1>
        <h2>DIR {{ project.DIR }}</h2>
        <h2>DOP {{ project.DOP }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import loadContent from "@/utils/loadContent";
import LoadingIndicator from "@/components/ui/LoadingIndicator";

export default {
  name: "ProjectPlayer",
  components: {LoadingIndicator},
  data() {
    return {
      isLoading: this.$store.state.projects === null,
    }
  },
  computed: {
    project() {
      return this.$store.state.bySlug[this.$route['params'].slug];
    }
  },
  mounted() {
    if (this.$store.state.projects === null)
      loadContent().then(() => {
        if (!this.$store.state.bySlug[this.$route['params'].slug])
          this.$router['push']("/work");
        else
          document.title = this.$store.state.bySlug[this.$route['params'].slug].title + " - WORK - PROVIDENCE";
        this.isLoading = false
      });

    else {
      if (!this.$store.state.bySlug[this.$route['params'].slug])
        this.$router['push']("/work");
      else
        document.title = this.$store.state.bySlug[this.$route['params'].slug].title + " - WORK - PROVIDENCE";
    }
  },
  created() {
    document.title = "WORK - PROVIDENCE";
  },
}
</script>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
}
.container {
  padding: 40px;
  min-height: 100vh;
  box-sizing: border-box;
}

iframe {
  width: 70%;
  aspect-ratio: 16/9;
  border: none;
}

.video {
  margin-top: 40px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.desc h1 {
  margin-bottom: 24px;
}

a {
  display: inline-block;
}

</style>