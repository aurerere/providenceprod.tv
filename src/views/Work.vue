<template>
  <Navigation :background="true"/>
  <main>
    <div class="loading" v-if="isLoading">
      <LoadingIndicator/>
    </div>
    <div class="category" v-else v-for="category in Object.keys(projects)">
      <h1>{{category}}</h1>
      <div class="projects-wrapper">
        <Project :project="project" v-for="project in projects[category]"/>
      </div>
    </div>
  </main>
</template>

<script>
import LoadingIndicator from "@/components/ui/LoadingIndicator";
import Navigation from "@/components/Navigation";
import loadContent from "@/utils/loadContent";
import Project from "@/components/Project";
export default {
  name: "Work",
  components: {Navigation, LoadingIndicator, Project},
  data() {
    return {
      isLoading: this.$store.state.projects === null,
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  },
  mounted() {
    if (this.$store.state.projects === null)
      loadContent().then(() => this.isLoading = false);
  },
  created() {
    document.title = "WORK - PROVIDENCE";
  }
}
</script>

<style scoped>
main {
  position: absolute;
  top: 124px;
  width: 100%;
  min-height: calc(100vh - 124px);
  box-sizing: border-box;
  padding: 0 var(--padding) var(--padding) var(--padding);
  display: flex;
  flex-direction: column;
  gap: var(--padding);
}

.loading {
  display: flex;
  justify-content: center;
}

.projects-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  margin-top: 12px;
  gap: var(--padding);
}

@media (max-width: 1300px) {
  .projects-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 900px) {
  .projects-wrapper {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 750px) {
  main {
    top: 80px;
  }
}
</style>