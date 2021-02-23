<template>
  <b-container>
    <Header6 />
    <b-card class="shadow-lg">
      <b-card-title>Articles</b-card-title>
      <b-card-sub-title>Artigos</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>
          Artigos são palavras que definem um substantivo como específico ou
          genérico. O inglês tem dois tipos de artigos: definidos e indefinidos.
        </p>
      </b-card-text>
      <b-col>
        <b-card
          class="shadow mb-2"
          title="Definite Article"
          sub-title="Artigo Definido"
        >
          <img src="../../assets/the.png" alt="The" />
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>O artigo definido é a palavra <strong>the</strong>. Limita o significado de um substantivo a uma coisa particular. Por exemplo, seu amigo pode perguntar: “Você vai à festa neste fim de semana?” O artigo definitivo diz que seu amigo está se referindo a uma festa específica que vocês dois conhecem. O artigo definido pode ser usado com substantivos no singular, no plural ou incontáveis.</p>
      </b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          class="shadow"
          title="Indefinite Article"
          sub-title="Artigo Indefinido"
        >
          <img src="../../assets/a.jpeg" alt="A" />
        </b-card>
      </b-col>

    </b-card>
  </b-container>
</template>

<script>
import Header6 from "./Header6.vue";
export default {
  name: "Articles",
  components: { Header6 },
};
</script>

<style>
img {
  width: 50%;
}
</style>
