<template>
  <Navigation :work="true"/>
  <div class="loading" v-if="isLoading">
    <LoadingIndicator/>
  </div>
  <div class="container" v-else>
    <router-link to="/work" >
      <div class="back">
        <img src="@/assets/back.svg" alt="back">
        <h1>work</h1>
      </div>
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
import Navigation from "@/components/Navigation";

export default {
  name: "ProjectPlayer",
  components: {Navigation, LoadingIndicator},
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
  padding: 120px var(--padding) var(--padding) var(--padding);
  min-height: 100vh;
  box-sizing: border-box;
}

iframe {
  width: 100%;
  max-height: 63vh;
  aspect-ratio: 16/9;
  border: none;
}

.video {
  margin-top: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;
}

.desc h1 {
  margin-bottom: 24px;
}

a {
  display: inline-block;
}

.back {
  display: flex;
  gap: 12px;
}

.back img {
  margin-bottom: 4px;
}

@media (max-width: 750px) {
  .container {
    padding-top: 80px;
  }
}
</style>