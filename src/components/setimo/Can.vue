<template>
  <b-container>
    <Header7 />
    <!-- component -->
    <b-card class="shadow-lg mb-4">
      <b-card-title>Verb Can</b-card-title>
      <b-card-sub-title>Verbo Poder</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>
          <strong>Can</strong> é um verbo modal, por isso jamais muda. Isso mesmo! Não muda sua forma com os pronomes (I, you, he...). E por ser modal, NÃO se coloca a partícula <strong>to</strong> depois dele para formar o infinitivo do verbo principal. <em>"Como é?!"</em>, perguntas? Relaxa. Só analisar os exemplos e tranquilidade. Ele  é usado para expressar <strong>habilidade</strong>, dizer que algo é <strong>possível</strong>, fazer um <strong>pedido</strong>, oferecer <strong>permissão</strong>. Na forma negativa, pode-se usar <em>cannot</em> além de <strong>can't</strong>.
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
      <h5>Exemplos</h5>
      <p>
        Observação: Muitas vezes <em>can</em> pode ser traduzido por <em>saber</em> porque se relaciona com <em>ter habilidade de</em>. Tudo dependerá do contexto.
      </p>
      <ul>
        <li>
          I <strong class="text-primary">can</strong> play the guitar. (Eu <strong class="text-primary">posso</strong> tocar violão. - Presta atenção que aqui também poderia ser <em>"Eu <strong class="text-primary">sei/tenho a habilidade de </strong> tocar violão."</em> De novo: a tradução vai depender se se trata de <strong>possibilidade</strong> ou de <strong>habilidade</strong>.) 
        </li>
        <li>
           I <strong class="text-primary">can't</strong> play the guitar. (Eu <strong class="text-primary">não posso/não sei</strong> tocar violão.)
        </li>
        <li>
          <strong class="text-primary">Can</strong> you please stop talking about BBB?! (Você <strong class="text-primary">pode</strong> parar de falar sobre BBB, por favor?!) 
        </li>
        <li>
          He <strong class="text-primary">can</strong> come with us. (Ele <strong class="text-primary">pode</strong> vir conosco.) 
        </li>
      </ul>
    </b-card>
  </b-container>
</template>

<script>
import Header7 from "./Header7.vue";
export default {
  name: "Can",
  components: {
    Header7,
  },
  data() {
    return {
      itemsA: [
      { can: "I CAN", poder: "EU POSSO"},
      { can: "YOU CAN", poder: "VOCÊ PODE"},
      { can: "HE CAN", poder: "ELE PODE"},
      { can: "SHE CAN", poder: "ELA PODE"},
      { can: "IT CAN", poder: "ELE/ELA PODE"},
      { can: "WE CAN", poder: "NÓS PODEMOS"},
      { can: "YOU CAN", poder: "VOCÊS PODEM"},
      { can: "THEY CAN", poder: "ELES/ELAS PODEM"},
      ],
      itemsN: [
      { can: "I CAN'T", poder: "EU NÃO POSSO"},
      { can: "YOU CAN'T", poder: "VOCÊ NÃO PODE"},
      { can: "HE CAN'T", poder: "ELE NÃO PODE"},
      { can: "SHE CAN'T", poder: "ELA NÃO PODE"},
      { can: "IT CAN'T", poder: "ELE/ELA NÃO PODE"},
      { can: "WE CAN'T", poder: "NÓS NÃO PODEMOS"},
      { can: "YOU CAN'T", poder: "VOCÊS NÃO PODEM"},
      { can: "THEY CAN'T", poder: "ELES/ELAS NÃO PODEM"},
      ],
      itemsI: [
      { can: "CAN I?", poder: "EU POSSO?"},
      { can: "CAN YOU?", poder: "VOCÊ PODE?"},
      { can: "CAN HE?", poder: "ELE PODE?"},
      { can: "CAN SHE?", poder: "ELA PODE?"},
      { can: "CAN IT?", poder: "ELE/ELA PODE?"},
      { can: "CAN WE?", poder: "NÓS PODEMOS?"},
      { can: "CAN YOU?", poder: "VOCÊS PODEM?"},
      { can: "CAN THEY?", poder: "ELES/ELAS PODEM?"},
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
