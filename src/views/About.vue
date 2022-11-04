<template>
  <Navigation :show-instagram="false"/>
  <div class="main">
    <h1>PROVIDENCE IS A PRODUCTION COMPANY BASED IN PARIS. <br>
      We do music videos, short films, corporate and digital content.</h1>
    <div class="social">
      <a href="https://www.instagram.com/providenceprod.tv/" target="_blank">
        <h1>@PROVIDENCE.TV</h1>
      </a>
      <a href="mailto:hello@providenceprod.tv">
        <h1>hello@providenceprod.tv</h1>
      </a>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  name: "About",
  components: {Navigation},
  created() {
    document.title = "ABOUT - PROVIDENCE";
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 88px;
  padding: 0 var(--padding);
}
h1 {
  text-align: center;
}

.social {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>