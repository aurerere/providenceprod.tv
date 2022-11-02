<template>
  <div class="container">
    <iframe
        :src="`https://player.vimeo.com/video/${id}?autoplay=1&title=0&color=0027FF&muted=1&controls=0&loop=1`"
        allow="autoplay; fullscreen" allowfullscreen >
    </iframe>
    <div class="credits">
      <h1>{{ name }}</h1>
      <h2>DIR {{ DIR }}</h2>
      <h2>DOP {{ DOP }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slide",
  props: {
    id: String,
    name: String,
    DIR: String,
    DOP: String,
    active: {
      type: Boolean,
      default: false
    }
  },
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
  padding: 40px;
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
</style>