<template>
  <b-container>
    <Header8 />
    <b-card class="shadow-lg mb-4">
      <b-card-title>Used to</b-card-title>
      <b-card-sub-title>Costumava</b-card-sub-title>
      <b-card-text
      class="mt-2 md-w-75
      text-center mx-auto"
      >
      <p>
      </p>
    </b-card-text>
  </b-card>
</b-container>
</template>
<script>
  import Header8 from "./Header8";

  export default {
    name: "CountableUncountable",
    components: { Header8 },
  };
</script>
<style lang="css" scoped>
td,
th,
tr {
  border: 1px solid red;
  padding: 1rem;
  text-align: left;
}
table {
  margin: 0 auto;
}
.att {
  padding: 0.3rem;
  color: blue;
  background-color: #ddd;
}
.att p {
  padding: 0.2rem;
}
</style>
