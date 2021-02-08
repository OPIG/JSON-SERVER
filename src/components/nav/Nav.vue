<template>
  <nav class="nav">
    <router-link class="nav-item" to="/" exact>Home</router-link>
    <router-link class="nav-item" to="/about">About</router-link>
    <router-link class="nav-item" to="/products">Product</router-link>
    <router-link class="nav-item" to="/addProduct">addProduct</router-link>
    <router-link class="nav-item" to="/echart">Echart</router-link>
  </nav>
</template>

<script>
export default {
  name: 'nav-dom'
}
</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #4e4e4e;
  .nav-item {
    flex: 1;
    text-align: center;
    color: #666;
    text-decoration: none;
    position: relative;
    &.active {
      color: #fb2;
      &::after {
        display: inline-block;
        width: 20px;
        height: 2px;
        bottom: 0;
        left: 0;
        background: #fb2;
        left: 50%;
        bottom: 0;
        margin-left: -10px;
        position: absolute;
        content: "";
      }
    }
  }
}
</style>
