<template>
  <div class="container">
    <Transition>
      <iframe
          :src="`https://player.vimeo.com/video/${id}&autoplay=1&title=0&color=0027FF&muted=1&controls=0&loop=1`"
          allow="autoplay; fullscreen" allowfullscreen v-if="isActive">
      </iframe>
    </Transition>
    <div class="credits">
      <router-link :to="'/work/' + slug">
        <h1>{{ name }}</h1>
      </router-link>
      <h2>DIR {{ DIR }}</h2>
      <h2>DOP {{ DOP }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slide",
  data() {
    return {
      isActive: false,
    }
  },
  props: {
    id: String,
    name: String,
    DIR: String,
    DOP: String,
    slug: String,
  },
  methods: {
    deactivate() {
      this.isActive = false;
    },
    activate() {
      this.isActive = true;
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

iframe {
  z-index: -1;
  top: 0;
  position: absolute;
  height: 100vh;
  aspect-ratio: 16/9;
  border: none;
  left: 50%;
  transform: translateX(-50%) scale(1.4);
}

.credits {
  padding: var(--padding);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 100;
}

.credits h1 {
  font-size: 100px;
  margin-bottom: 20px;
}
.credits h2 {
  font-size: 50px;
}

/* we will explain what these classes do next! */
.v-enter-active {
  transition: opacity 7s ease;
}

.v-leave-active {
  transition: opacity .5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

a {
  display: inline-block;
  width: fit-content;
}

@media (max-width: 650px) {
  .credits h1 {
    font-size: 50px;
  }
  .credits h2 {
    font-size: 30px;
  }
}
</style>