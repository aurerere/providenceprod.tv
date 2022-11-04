<template>
  <Navigation/>
  <div class="loading" v-if="isLoading">
    <LoadingIndicator/>
  </div>
  <div class="overflow" id="overflow" v-else>
    <div class="wrapper" id="wrapper">
      <Slide v-for="project in projects"
             :id="project.previewID"
             :name="project.title"
             :DIR="project.DIR"
             :DOP="project.DOP"
             :slug="project.slug"
             ref="slidesRefs"
      />
    </div>
    <div class="controls" v-if="!isLoading">
      <img src="@/assets/down.svg" alt="down-img" :style="slides === active ? 'opacity: 0.5; cursor: not-allowed;' : null" @click="next">
      <img src="@/assets/up.svg" alt="down-img" :style="active === 0 ? 'opacity: 0.5; cursor: not-allowed;' : null" @click="prev">
    </div>
  </div>
</template>

<script>
import loadContent from "@/utils/loadContent";
import Navigation from "@/components/Navigation";
import Slide from "@/components/Slide";
import LoadingIndicator from "@/components/ui/LoadingIndicator";

export default {
  name: "Home",
  components: {Slide, Navigation, LoadingIndicator},
  data() {
    return {
      isLoading: this.$store.state.landing === null,
      slides: this.$store.state.landing ? this.$store.state.landing.length - 1: null,
      active: 0,
      pressed: false,
      startX: null,
      x: null
    }
  },
  computed: {
    projects() {
      return this.$store.state.landing;
    }
  },
  methods: {
    next() {
      console.log(this.active, this.slides)
      if (this.active < this.slides) {
        this.active++;
        this.$refs.slidesRefs[this.active - 1].deactivate();
        this.$refs.slidesRefs[this.active].activate();
        document.getElementById("wrapper").style.top = `-${this.active * 100}vh`;
      }
    },
    prev() {
      if (this.active > 0) {
        this.active--;
        this.$refs.slidesRefs[this.active + 1].deactivate();
        this.$refs.slidesRefs[this.active].activate();
        document.getElementById("wrapper").style.top = `-${this.active * 100}vh`;
      }
    },
  },
  mounted() {
    if (this.$store.state.projects === null)
      loadContent().then(() => {
        this.isLoading = false;
        this.slides = this.$store.state.landing.length - 1;
      });

    else
      this.$refs.slidesRefs[0].activate();
  },
  created() {
    document.title = "HOME - PROVIDENCE";
  },
  updated() {
    if (this.$store.state.landing !== null && this.active === 0) {
      this.$refs.slidesRefs[0].activate();

      // document.getElementById("app").addEventListener("mousedown", (e) => {
      //   console.log("mousedown")
      //   this.pressed = true;
      //   this.startX = e.offsetX - document.getElementById("wrapper").offsetTop;
      // });
      // document.getElementById("app").addEventListener("mouseup", (e) => {
      //   console.log("up")
      //   this.pressed = false;
      // });
    }
  }
}
</script>

<style scoped>
.loading {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: hidden;
  overflow-x: hidden;
  transition: .5s;
}
.overflow {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.controls {
  position: absolute;
  bottom: var(--padding);
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: var(--padding);
  align-items: center;
}
.controls img {
  cursor: pointer;
}
</style>