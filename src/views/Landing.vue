<template>
  <div id="landing">
    <img alt="Logo" src="../assets/logo.svg">
    <LoadingIndicator size="2rem" stroke-width="4px" v-if="clicked && isLoading"/>
    <h1 v-if="!clicked">CLICK ANYWHERE TO ENTER</h1>
  </div>
</template>

<script>
import loadContent from "@/utils/loadContent";
import LoadingIndicator from "@/components/ui/LoadingIndicator";

export default {
  name: 'Landing',
  components: {LoadingIndicator},
  data () {
    return {
      isLoading: true,
      clicked: false,
    }
  },
  methods: {
    contentLoading() {
      loadContent()
          .then(() => {
            this.isLoading = false;
            if (this.clicked) {
              this.$router.push('/home');
            }
          })
    },
    handleClick() {
      this.clicked = true;

      if (!this.isLoading)
        this.$router.push('/home');
    }
  },
  mounted() {
    if (this.$store.state.projects !== null)
      this.isLoading = false;
    else
      this.contentLoading();


    document.getElementById("landing").addEventListener('click', this.handleClick);
  }
}
</script>

<style scoped>
div {
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
}

img {
  width: 70vw;
  max-width: 500px;
}

h1, .lds-ring {
  position: absolute;
  bottom: 24px;
}

h1 {
  font-size: 1.2rem;
  animation: h-move 2s infinite;
}

@keyframes h-move {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>