<template>
  <router-link :to="'/work/' + project['slug']">
    <div class="card" :style="`background-image: url(https://vumbnail.com/${project['videoID']}.jpg)`">
      <div class="content">
        <h1>{{project['title']}}</h1>
        <div class="credits">
          <h2>DIR {{project['DIR']}}</h2>
          <h2>DOP {{project['DOP']}}</h2>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import LoadingIndicator from "@/components/ui/LoadingIndicator";

export default {
  name: "Project",
  components: {LoadingIndicator},
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  width: 100%;
  aspect-ratio: 16/9;
  background-color: #141414;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
}

.content {
  gap: 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity .3s;
  background: rgba(0, 0, 0, .9);
  -webkit-backface-visibility: hidden;
}

.content h2 {
  font-size: 1.3rem;
  margin: 0;
}

.credits {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content:hover {
  opacity: 1;
  transition: opacity .3s;
  -webkit-backface-visibility: hidden;
}

a {
  text-decoration: none;
}
</style>