<template>
  <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
</template>

<script>
export default {
  name: "LoadingIndicator",
  props: {
    size: {
      type: String,
      default: '50px'
    },
    strokeWidth: {
      type: String,
      default: '5px'
    },
    color: {
      type: String,
      default: 'var(--blue)'
    }
  }
}
</script>

<style scoped>
.lds-ring {
  position: relative;
  width: v-bind(size);
  height: v-bind(size);
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: v-bind(size);
  height: v-bind(size);
  /*margin: 8px;*/
  border: v-bind(strokeWidth) solid v-bind(color);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: v-bind(color) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>