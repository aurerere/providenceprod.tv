<template>
  <nav id="wide" :class="background ? 'background' : null">
    <div class="logo">
      <router-link to="/home"><img src="@/assets/logo.svg" alt="logo"/></router-link>
    </div>
    <a href="https://www.instagram.com/providenceprod.tv/" target="_blank" v-if="showInstagram" class="insta">
      @PROVIDENCEPROD.TV
    </a>
    <div class="pages">
      <router-link to="/home">HOME</router-link>
      <router-link to="/work" :style="work ? 'text-decoration: underline' : null">WORK</router-link>
      <router-link to="/about">ABOUT</router-link>
    </div>

    <div class="burger">
      <a href="#menu">
        <img src="@/assets/burger.svg" alt="burger-menu">
      </a>
    </div>

    <div id="menu">
      <div class="logo-close">
        <div class="logo">
          <router-link to="/home#"><img src="@/assets/logo.svg" alt="logo"/></router-link>
        </div>
        <a href="#">
          <img src="@/assets/close.svg" alt="close-menu" class="close-btn">
        </a>
      </div>
      <div class="pages-mobile">
        <router-link to="/home">HOME</router-link>
        <router-link to="/work" :style="work ? 'text-decoration: underline' : null">WORK</router-link>
        <router-link to="/about">ABOUT</router-link>
      </div>
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
    work: {
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
.logo img {
  width: 250px;
  max-width: 250px
}
.pages {
  display: flex;
  width: 300px;
  justify-content: space-between;
}

nav {
  padding: var(--padding);
  position: fixed;
  z-index: 10;
}

nav.background {
  background-color: var(--bg);
}

.burger {
  display: none;
}

.burger img {
  height: 24px;
  width: auto;
}

#menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg);
  z-index: 100;
  padding: var(--padding);
  box-sizing: border-box;
  display: none;
  transition: .2s;
}

#menu:not(:target) {
  right: -100vw;
  transition: .2s;
}

.logo-close {
  display: flex;
  justify-content: space-between;
}

.close-btn {
  height: 24px;
}

.pages-mobile {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;
  height: 100%;
}

.pages-mobile a {
  font-size: 2rem;
  display: inline-block;
  width: fit-content;
}

@media (max-width: 950px) {
  .insta {
    display: none;
  }
}

@media (max-width: 750px) {
  .pages {
    display: none;
  }

  .burger {
    display: block;
  }

  .logo img {
    width: 200px;
  }

  #menu {
    display: block;
  }
}
</style>