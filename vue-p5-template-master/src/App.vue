<template>
  <h1>程馨的作業</h1>
  <div id="nav">
    <router-link to="/">Homework1</router-link> |
    <!-- <router-link to="/example2">Example 2</router-link> |
    <router-link to="/example3">Example 3</router-link> | -->
    <router-link to="/homework2">Homework2</router-link>
  </div>
  <router-view :key="$route.fullPath"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color:black;
}

#nav a.router-link-exact-active {
  color:#ba181b;
}
</style>
