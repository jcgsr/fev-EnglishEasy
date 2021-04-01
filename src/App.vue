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
  <p class="date">{{ currentDate }}</p>
  <Footer />
</div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";

  export default {
    name: "App",
    data() {
      return {
        currentDate: "",
      };
    },
    methods: {
      today() {
        let date = new Date();
        this.currentDate = date.toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
      },
    },
    mounted() {
      this.today();
    },
    components: {
      Header,
      Footer,
    },
    watch: {
      $route: {
        handler: (to) => {
          document.title = to.meta.title || "Your Website";
        },
        immediate: true,
      },
    },
  };
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;700&family=Marmelad&display=swap");

#app {
  font-family: "Inconsolata", monospace;
  color: rgb(241, 11, 11);
}
.date {
  margin: 0 auto;
  text-align: center;
  padding-bottom: 1rem;
}
</style>
