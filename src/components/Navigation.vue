<template>
  <nav id="wide" :class="background ? 'background' : null">
    <div class="logo">
      <router-link to="/home"><img src="@/assets/logo.svg" alt="logo"/></router-link>
    </div>
    <a href="https://www.instagram.com/providenceprod.tv/" target="_blank" v-if="showInstagram">@PROVIDENCEPROD.TV</a>
    <div class="pages">
      <router-link to="/home">HOME</router-link>
      <router-link to="/work">WORK</router-link>
      <router-link to="/about">ABOUT</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    showInstagram: {
      type: Boolean,
      default: true,
    },
    background: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style scoped>
nav {
  display: flex;
  width: 100vw;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 300px;
  display: flex;
}
img {
  width: 250px;
  max-width: 250px
}
.pages {
  display: flex;
  width: 300px;
  justify-content: space-between;
}

nav {
  padding: 40px;
  position: fixed;
  z-index: 10;
}

nav.background {
  background-color: var(--bg);
}
</style>