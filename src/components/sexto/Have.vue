<template>
  <b-container>
    <Header6 />
    <!-- component -->
    <b-card class="shadow-lg">
      <b-card-title>Verb To Have</b-card-title>
      <b-card-sub-title>Verbo Ter</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>
          Um dos verbos mais importantes em inglês, o verbo
          <strong>"to have"</strong> é um dos mais usado nessa língua. Ele serve para
          indicar <strong>posse</strong>. É um verbo irregular. Pode ser utilizado como verbo auxiliar para formar o "Presente Perfeito".
        </p>

        <p>
         Possui duas flexões no Presente Simples:
         <strong>have, has</strong>. Confere os seus usos nas tabelas abaixo.
         <em class="text-primary">Dica:</em> <strong>has</strong> sempre com <strong>he, she, it</strong> e
         <strong>have</strong> com todos os outros.
       </p>
     </b-card-text>

     <b-row>
      <b-col>
        <b-card class="shadow mb-2 cards">
          <span>Afirmativa</span>
          <b-table class="text-danger" striped hover :items="itemsA">
          </b-table>
        </b-card>
      </b-col>  
      <b-col>
        <b-card class="shadow mb-2 cards">
          <span>Negativa</span>
          <b-table class="text-danger" striped hover :items="itemsN">
          </b-table>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="shadow mb-2 cards">
          <span>Interrogativa</span>
          <b-table class="text-danger" striped hover :items="itemsI">
          </b-table>
        </b-card>
      </b-col>
    </b-row>
  </b-card>
</b-container>
</template>

<script>
import Header6 from "./Header6.vue";
export default {
  name: "Be",
  components: {
    Header6,
  },
  data() {
    return {
      itemsA: [
      { have: "I HAVE", ter: "EU TENHO"},
      { have: "YOU HAVE", ter: "VOCÊ TEM"},
      { have: "HE HAS", ter: "ELE TEM"},
      { have: "SHE HAS", ter: "ELA TEM"},
      { have: "IT HAS", ter: "ELE/ELA TEM"},
      { have: "WE HAVE", ter: "NÓS TEMOS"},
      { have: "YOU HAVE", ter: "VOCÊS TÊM"},
      { have: "THEY HAVE", ter: "ELES/ELAS TÊM"},
      ],
      itemsN: [
      { have: "I DON'T HAVE", ter: "EU NÃO TENHO"},
      { have: "YOU DON'T HAVE", ter: "VOCÊ NÃO TEM"},
      { have: "HE DOESN'T HAVE", ter: "ELE NÃO TEM"},
      { have: "SHE DOESN'T HAVE", ter: "ELA NÃO TEM"},
      { have: "IT DOESN'T HAVE", ter: "ELE/ELA NÃO TEM"},
      { have: "WE DON'T HAVE", ter: "NÓS NÃO TEMOS"},
      { have: "YOU DON'T HAVE", ter: "VOCÊS NÃO TÊM"},
      { have: "THEY DON'T HAVE", ter: "ELES/ELAS NÃO TÊM"},
      ],
      itemsI: [
      { have: "DO I HAVE?", ter: "EU TENHO?"},
      { have: "DO YOU HAVE?", ter: "VOCÊ TEM?"},
      { have: "DOES HE HAVE?", ter: "ELE TEM?"},
      { have: "DOES SHE HAVE?", ter: "ELA TEM?"},
      { have: "DOES IT HAVE?", ter: "ELE/ELA TEM?"},
      { have: "DO WE HAVE?", ter: "NÓS TEMOS?"},
      { have: "DO YOU HAVE?", ter: "VOCÊS TÊM?"},
      { have: "DO THEY HAVE?", ter: "ELES/ELAS TÊM?"},
      ]
    };
  },
};
</script>

<style scoped>
tr,
td,
th {
  padding: 0.2rem; 
}
p {
  width: 80%;
}
