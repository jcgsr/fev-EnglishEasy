<template>
  <div class="flex-row">
    <div class="flex-col">
      <h1 class="p-3 text-2xl font-bold text-center text-red-500 h1s">
        English Easy
      </h1>
      <div class="w-full buttons">
        <button class="btn">
        <router-link to="/sexto">
          6º Ano
        </router-link>
        </button>
        <button class="btn">
          7º Ano
        </button>
        <button class="btn">
          8º Ano
        </button>
        <button class="btn">
          9º Ano
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style>
.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}
</style>
