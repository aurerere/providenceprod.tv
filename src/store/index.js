import { createStore } from 'vuex'

export default createStore({
  state: {
    landing: null,
    projects: null,
    bySlug: null
  },
  getters: {
  },
  mutations: {
    setLanding(state, payload) {
      state.landing = payload;
    },
    setProjects(state, payload) {
      state.projects = payload;
    },
    setBySlug(state, payload) {
      state.bySlug = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
