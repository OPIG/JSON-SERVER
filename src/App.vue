<template>
  <div class="content">
    <app-header></app-header>
    <app-nav></app-nav>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Nav from './components/nav/Nav.vue'
export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-nav': Nav
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
