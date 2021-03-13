<template>
  <b-container>
    <Header6 />
    <b-card class="shadow-lg">
      <b-card-title>Subject Pronouns</b-card-title>
      <b-card-sub-title>Pronomes Pessoais</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>
          Os Pronomes Pessoais são os <strong>sujeitos</strong> dos verbos. O Pronome pessoal <strong>I</strong> deve ser sempre escrito com letra maiúscula.
        </p>
      </b-card-text>
      <b-row class="inside-cards">
        <b-col>
          <b-card class="shadow mb-2 cards">
            <b-table class="text-danger" striped hover :items="items">
            </b-table>
          </b-card>
        </b-col>
      </b-row>

    </b-card>
  </b-container>
</template>

<script>
import Header6 from "./Header6";
export default {
  name: "SubjectPronouns",
  components: {
    Header6,
  },
  data() {
      return {
        items: [
          { Subject: "I", Translation: "EU" },
          { Subject: "YOU", Translation: "VOCÊ" },
          { Subject: "HE", Translation: "ELE" },
          { Subject: "SHE", Translation: "ELA" },
          { Subject: "IT", Translation: "ELE/ELA" },
          { Subject: "WE", Translation: "NÓS" },
          { Subject: "YOU", Translation: "VOCÊS" },
          { Subject: "THEY", Translation: "ELES/ELAS" },
        ]
        }
    }
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

.dropdown:hover .dropdown-menu {
  display: block;
  opacity: 0.97;
}
</style>
