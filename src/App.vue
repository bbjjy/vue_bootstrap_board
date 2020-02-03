<template>
  <div id="app">
    <Header />
    <router-view/>
    <pulse-loader :loading="$store.state.loading" :color="color" :size="size"></pulse-loader>
  </div>
</template>

<script>
import Header from '@/components/Header'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  name: 'App',
	data () {
		return {
      color: '#3AB982',
      size: '30px',
    }
  },  
  components: {
    Header,
    PulseLoader,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
