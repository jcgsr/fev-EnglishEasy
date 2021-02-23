<template>
  <b-container class="container">
    <h1>English Easy</h1>
    <b-row>
      <b-col>
        <b-dropdown
          id="dropdown-1"
          text="6º Ano"
          variant="danger"
          class="m-md-4 mb-2 shadow"
          size="lg"
          cols="3"
        >
          <b-dropdown-item>
            <router-link to="/be">To Be</router-link>
          </b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
      </b-col>
      <b-col>
        <b-dropdown
          id="dropdown-1"
          text="7º Ano"
          variant="danger"
          class="m-md-4 shadow"
          size="lg"
          cols="3"
        >
          <b-dropdown-item>
            <router-link to="/be">To Be</router-link>
          </b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
      </b-col>
      <b-col>
        <b-dropdown
          id="dropdown-1"
          text="8º Ano"
          variant="danger"
          class="m-md-4 shadow"
          size="lg"
          cols="3"
        >
          <b-dropdown-item>
            <router-link to="/be">To Be</router-link>
          </b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
      </b-col>
      <b-col>
        <b-dropdown
          id="dropdown-1"
          text="9º Ano"
          variant="danger"
          class="m-md-4 shadow"
          size="lg"
          cols="3"
        >
          <b-dropdown-item>
            <router-link to="/be">To Be</router-link>
          </b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style>
h1 {
  text-align: center;
  padding: 1rem;
}
.btn-danger {
  background-color: rgb(241, 11, 11);
}
.btn-danger:hover {
  background-color: blue !important;
  border: none;
}
.container {
  text-align: center;
}
.dropdown-menu > li > a:hover {
  background-color: blue;
  color: white;
}
.dropdown-menu ul {
  background-color: gray;
}
</style>
