<template>
  <b-container>
    <Header6 />
    <b-card class="shadow-lg">
      <b-card-title>Demonstrative Pronouns</b-card-title>
      <b-card-sub-title>Pronomes Demonstrativos</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>Os pronomes demonstrativos são usados em vez de um sintagma nominal (nome e seus respectivos determinantes:  sujeito e pelos complementos verbais) para indicar distância no tempo ou espaço em relação ao falante. Eles também indicam número gramatical - singular ou plural. São eles:</p>
        <p>
          <table>
            <tbody>
              <tr>
                <td>&nbsp;</td>
                <th>Singular</th>
                <th>Plural</th>
              </tr>
              <tr>
                <td>próximo</td>
                <td class="text-primary">this</td>
                <td class="text-primary">these</td>
              </tr>
              <tr>
                <td>distante</td>
                <td class="text-primary">that</td>
                <td class="text-primary">those</td>
              </tr>
            </tbody>
          </table>
        </p>    
        <strong>Tradução:</strong>
        <p>
          <strong class="text-primary">This</strong>: esse, essa, este, esta.
        </p>    
        <p>
          <strong class="text-primary">These</strong>: esses, essas, estes, estas.
        </p>    
        <p>
          <strong class="text-primary">That</strong>: aquele, aquela.
        </p>    
        <p>
          <strong class="text-primary">Those</strong>: aqueles, aquelas.
        </p>    
      </b-card-text>
      
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
    return {};
  },
};
</script>
<style scoped>
td,
th,
tr {
  border: 1px solid red;
  padding: 1rem;
}
table {
  margin: 0 auto;
}
</style>