<template>
  <b-container>
    <Header6 />
    <b-card class="shadow-lg">
      <b-card-title>Possessive Adjectives</b-card-title>
      <b-card-sub-title>Adjetivos Possessivos</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>
      Os adjetivos possessivos são usados para mostrar a <strong class="text-primary">posse</strong> ou <strong class="text-primary">propriedade</strong> de algo. Embora os utilizemos quando nos referimos a pessoas, é mais no sentido de relacionamento do que de posse. Podem ser usados tanto no singular quanto no plural. Confere a tabela abaixo:
        </p>
      </b-card-text>
      <b-row>
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
  name: "PossessiveAdj",
  components: {
    Header6,
  },
  data() {
      return {
        items: [
          { Possessive: "MY", Translation: "MEU(S)/MINHA(S)" },
          { Possessive: "YOUR", Translation: "SEU(S)/SUA(S)" },
          { Possessive: "HIS", Translation: "DELE" },
          { Possessive: "HER", Translation: "DELA" },
          { Possessive: "ITS", Translation: "DELE/DELA" },
          { Possessive: "OUR", Translation: "NOSSO(S)/NOSSA(S)" },
          { Possessive: "YOUR", Translation: "SEU(S)/SUA(S)" },
          { Possessive: "THEIR", Translation: "DELES/DELAS" },
        ]
        }
    }
};
</script>
