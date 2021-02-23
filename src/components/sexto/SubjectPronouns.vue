<template>
  <b-container>
    <Header6 />
    <b-card class="shadow-lg">
      <b-card-title>Subject Pronouns</b-card-title>
      <b-card-sub-title>Pronomes Pessoais</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis
          voluptas, distinctio dignissimos numquam explicabo, fugit quae libero
          id adipisci quidem illum nostrum unde asperiores, reiciendis
          accusamus. Atque, iure re
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

<style></style>
