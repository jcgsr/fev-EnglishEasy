<template>
  <div id="app">
    <Header />
    <v-main>
      <transition
      mode="out-in"
      enter-active-class="animate__animated animate__zoomIn"
      leave-active-class="animate__animated animate__zoomOut"
      >
      <router-view @authenticated="setAuthenticated"></router-view>
    </transition>
  </v-main>  
</div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

</style>
