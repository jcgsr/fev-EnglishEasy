<template>
  <b-container class="container">
    <h1>English Easy</h1>
    <b-row>
      <b-col md="3">
        <b-dropdown
        id="dropdown-1"
        text="6º Ano"
        variant="danger"
        class="m-md-4 mb-2 shadow"
        size="lg"
        >
        <b-dropdown-item>
          <router-link to="/subj">Subject Pronouns</router-link>
        </b-dropdown-item>

        <b-dropdown-item>
          <router-link to="/be">To Be</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/articles">Articles</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/possessive-adj"
          >Possessive Adjectives</router-link
          >
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/numbers">Cardinal Numbers</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/genitive">Genitive Case</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/demonstratives"
          >Demonstrative Pronouns</router-link
          >
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/therebe">There To Be</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/presentsimple">Present Simple</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/prepositionplace">Preposition of Place</router-link>
        </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/plurals">Plurals</router-link>
          </b-dropdown-item> 
          <b-dropdown-item>
            <router-link to="/presentcontinuous">Present Continuous</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/have">To Have</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/tellingtime">Telling Time</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/ordinal">Ordinal Numbers</router-link>
          </b-dropdown-item>
        </b-dropdown>
      </b-col>
      <b-col md="3">
        <b-dropdown
        id="dropdown-1"
        text="7º Ano"
        variant="danger"
        class="m-md-4 mb-2 shadow"
        size="lg"
        >
        <b-dropdown-item>
          <router-link to="/be">To Be</router-link>
        </b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
      </b-dropdown>
    </b-col>
    <b-col md="3">
      <b-dropdown
      id="dropdown-1"
      text="8º Ano"
      variant="danger"
      class="m-md-4 mb-2 shadow"
      size="lg"
      >
      <b-dropdown-item>
        <router-link to="/be">To Be</router-link>
      </b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
    </b-dropdown>
  </b-col>
  <b-col md="3">
    <b-dropdown
    id="dropdown-1"
    text="9º Ano"
    variant="danger"
    class="m-md-4 shadow"
    size="lg"
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
  background-color: red;
}
a:hover {
  color: white !important;
}
.dropdown-menu ul {
  background-color: gray;
}
</style>
