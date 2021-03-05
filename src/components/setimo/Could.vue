<template>
  <b-container>
    <Header7 />
    <!-- component -->
    <b-card class="shadow-lg mb-4">
      <b-card-title>Verb Could</b-card-title>
      <b-card-sub-title>Verbo Podia/Poderia</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>
          <strong>Could</strong> é um verbo modal, é o passado de <router-link to="/can">can</router-link>. Ele  é usado para expressar <strong>habilidade</strong> no passado, dizer que algo <em>era</em> <strong>possível</strong>, fazer um <strong>pedido</strong> com maior formalidade assim como oferecer/pedir <strong>permissão</strong> mais polidamente. Na forma negativa, pode-se usar <em>could not</em> ou <strong>couldn't</strong>. 
        </p>
        <p>
          OBS.: As três tabelas abaixo usando <em>"podia"</em> como tradução, poderiam ter sido feitas tanto com <strong>"poderia"</strong> quanto <strong>"pude"</strong>. Fica a teu critério, entendido? Reforçando: tudo o que foi falado lá na página de <router-link to="/can">can</router-link> sobre ele, se aplica também ao <strong>could</strong>, mas o contexto sendo no passado, obviamente.
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
import Header7 from "./Header7.vue";
export default {
  name: "Could",
  components: {
    Header7,
  },
  data() {
    return {
      itemsA: [
      { could: "I COULD", podia: "EU PODIA"},
      { could: "YOU COULD", podia: "VOCÊ PODIA"},
      { could: "HE COULD", podia: "ELE PODIA"},
      { could: "SHE COULD", podia: "ELA PODIA"},
      { could: "IT COULD", podia: "ELE/ELA PODIA"},
      { could: "WE COULD", podia: "NÓS PODÍAMOS"},
      { could: "YOU COULD", podia: "VOCÊS PODIAM"},
      { could: "THEY COULD", podia: "ELES/ELAS PODIAM"},
      ],
      itemsN: [
      { could: "I COULDN'T", podia: "EU NÃO PODIA"},
      { could: "YOU COULDN'T", podia: "VOCÊ NÃO PODIA"},
      { could: "HE COULDN'T", podia: "ELE NÃO PODIA"},
      { could: "SHE COULDN'T", podia: "ELA NÃO PODIA"},
      { could: "IT COULDN'T", podia: "ELE/ELA NÃO PODIA"},
      { could: "WE COULDN'T", podia: "NÓS NÃO PODÍAMOS"},
      { could: "YOU COULDN'T", podia: "VOCÊS NÃO PODIAM"},
      { could: "THEY COULDN'T", podia: "ELES/ELAS NÃO PODIAM"},
      ],
      itemsI: [
      { could: "COULD I?", podia: "EU PODIA?"},
      { could: "COULD YOU?", podia: "VOCÊ PODIA?"},
      { could: "COULD HE?", podia: "ELE PODIA?"},
      { could: "COULD SHE?", podia: "ELA PODIA?"},
      { could: "COULD IT?", podia: "ELE/ELA PODIA?"},
      { could: "COULD WE?", podia: "NÓS PODÍAMOS?"},
      { could: "COULD YOU?", podia: "VOCÊS PODIAM?"},
      { could: "COULD THEY?", podia: "ELES/ELAS PODIAM?"},
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
a:hover {
  padding: .5rem;
}
