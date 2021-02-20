<template>
  <div class="flex-row w-full bg-red-500 shadow-md">
    <div class="flex-col">
    <div class="header">
      <button type="button">
        <router-link to="/">
          <h1
            class="p-3 text-2xl font-bold text-left text-white bg-red-500 shadow-md"
          >
            English Easy
          </h1>
        </router-link>
      </button>
      <button type="button">
        <router-link to="/info">
          <i class="px-2 text-2xl text-right fas fa-info"></i>
        </router-link>
      </button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>
<style>
a {
    color: blue;
    text-decoration: none;
    text-align: right;
  }
  i {
      color: white;
    }
  .header{
      display: flex;
      justify-content: space-between;
    } 
</style>

