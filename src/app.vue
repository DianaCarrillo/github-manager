<template>
  <div>
    <HomeApp />
  </div>
</template>

<script>
import HomeApp from '../src/components/HomeApp.vue'

export default {
  name: 'App',
  components: {
    HomeApp,
  },
}
</script>

<style>
#app {
  padding-bottom: 60px;
  margin-left: 70px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#userName {
  font-weight: bold;
}
</style>
