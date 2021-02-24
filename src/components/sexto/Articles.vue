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
          <img src="../../assets/the.png" alt="Letra The" />
          <p class="img-p">
            Imagem do site
            <a href="https://museulinguaportuguesa.org.br/the-em-portugues/">
              Museu Língua Portuguesa
            </a>
          </p>
          <b-card-text class="mt-2 md-w-75 text-center mx-auto">
            <p>
              O artigo definido em inglês é a palavra <strong>the</strong>. A
              sua tradução pode ser
              <strong class="text-primary">o, os, a, as</strong>. Limita o
              significado de um substantivo a uma coisa particular. Por exemplo:
              “<strong class="text-primary">A</strong> canção que mencionei...”
              A frase anterior se refere a uma canção específica e não a
              qualquer uma. <strong>The</strong> pode ser usado com substantivos
              no singular no plural como visto na sua tradução.
            </p>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          class="shadow"
          title="Indefinite Article"
          sub-title="Artigo Indefinido"
        >
          <img src="../../assets/a.jpg" alt="Letra A" />
          <p class="img-p">
            Foto de
            <a href="https://www.freeimages.com/pt/photo/felt-letter-1-1423341"
              >Gabriel Doyle</a
            >
            do site <a href="https://freeimages.com/">FreeImages</a>
          </p>
          <b-card-text>
            <p>
              Em inglês, os dois artigos indefinidos são
              <strong class="text-primary">a</strong> ou
              <strong class="text-primary">an</strong>. Como outros artigos, os
              artigos indefinidos são invariáveis. Usa
              <strong class="text-primary">a</strong> quando a próxima palavra
              começar com uma consoante ou <em>som</em> de consoante: palavras
              que começam em <em>"u"</em> e <em>"eu"</em> quando soarem como
              <em>"you"</em>. Usa
              <strong class="text-primary">an</strong> quando a próxima palavra
              começar com uma vogal (a, e, i, o, u) ou com um h mudo. Vê os
              exemplos abaixo:
            </p>
            <ul>
              <li><strong class="text-primary">a</strong> song</li>
              <li><strong class="text-primary">a</strong> guitar</li>
              <li>
                <strong class="text-primary">a</strong> european rock band
              </li>
              <li><strong class="text-primary">a</strong> unit</li>
              <li><strong class="text-primary">an</strong> electric guitar</li>
              <li><strong class="text-primary">an</strong> hour</li>
              <li><strong class="text-primary">an</strong> ugly bass player</li>
            </ul>
          </b-card-text>
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
ul li {
  text-align: left;
}
.img-p {
  font-size: x-small;
}
</style>
