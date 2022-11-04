<template>
  <router-view/>
</template>

<style>
:root {
  --bg: #000000;
  --blue: #0027FF;
  --padding: 40px;
}

::-webkit-scrollbar {
  position: fixed;
  right: 0;
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background: var(--blue);
}

body {
  background: var(--bg);
  color: var(--blue);
  margin: 0;
  padding: 0;
  font-family: alternate-gothic-atf, sans-serif;
  -webkit-font-smoothing: antialiased;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

h1, h2, h3, p {
  margin: 0;
  font-weight: normal;
  text-transform: uppercase;
}

a {
  color: var(--blue);
  text-decoration: none;
}

nav a {
  font-size: 2rem;
}

a:hover {
  text-decoration: underline;
}

nav a.router-link-exact-active {
  text-decoration: underline;
}

@media (max-width: 750px) {
  :root {
    --padding: 20px;
  }
}
</style>
