<template>
  <b-container>
    <Header7 />
    <!-- component -->
    <b-card class="shadow-lg mb-4">
      <b-card-title>Verb To Be (Past Simple)</b-card-title>
      <b-card-sub-title>Verbo Ser/Estar (Passado Simples)</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>
          O Passado Simple do verbo To Be tem duas formas quando conjugado:
          <strong>was</strong> usado com as pessoas <em>I, he, she, it</em> e
          <strong>were</strong>, usado com o restante <em>you, we, they</em>. A
          tradução dessas duas formas, como de constume, depende das pessoas em
          questão.
        </p>
        <p>
          Presta atenção que onde houver as traduções
          <strong>era, eram, éramos</strong>, pode-se perfeitamente trocá-las
          por <strong>estava, estavam, estávamos</strong>. Outra coisa: não
          existe contração das formas <em>was, were</em> na afirmativa como
          existe no presente (<em>I'm, you're, he's, etc</em>). Na negativa,
          pode ser tanto <strong>was not</strong> quanto
          <strong>wasn't</strong>. Confere as tabelas abaixo para a conjugação
          completa.
        </p>
      </b-card-text>

      <b-row class="inside-cards">
        <b-col>
          <b-card class="shadow mb-2 cards">
            <table>
              <thead>
                <tr>
                  <th>Affirmative</th>
                </tr>
                <hr />
              </thead>
              <t-body>
                <tr v-for="item in be" :key="item.index">
                  <td>
                    {{ item.pron }}
                    <strong class="text-primary">{{ item.aff }}</strong>
                  </td>
                  <td>
                    {{ item.tra }}
                  </td>
                </tr>
              </t-body>
            </table>
          </b-card>
        </b-col>

        <b-col>
          <b-card class="shadow mb-2">
            <table>
              <thead>
                <tr>
                  <th>Negative</th>
                </tr>
                <hr />
              </thead>
              <t-body>
                <tr v-for="item in be" :key="item.index">
                  <td>
                    {{ item.pron }}
                    <strong class="text-primary">{{ item.neg }}</strong>
                  </td>
                  <td>
                    {{ item.traN }}
                  </td>
                </tr>
              </t-body>
            </table>
          </b-card>
        </b-col>

        <b-col>
          <b-card class="shadow mb-2">
            <table>
              <thead>
                <tr>
                  <th>Interrrogative</th>
                </tr>
                <hr />
              </thead>
              <t-body>
                <tr v-for="item in be" :key="item.index">
                  <td>
                    <strong class="text-primary">{{ item.aff }}</strong>
                    {{ item.pronI }}
                  </td>
                  <td>
                    {{ item.traI }}
                  </td>
                </tr>
              </t-body>
            </table>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
import Header7 from "./Header7";
export default {
  name: "Be",
  components: {
    Header7,
  },
  data() {
    return {
      be: [
        {
          pron: "I",
          aff: "WAS",
          tra: "EU ERA",
          neg: "WASN'T",
          traN: "EU NÃO ERA",
          pronI: "I?",
          traI: "EU ERA?",
        },
        {
          pron: "YOU",
          aff: "WERE",
          tra: "VOCÊ ERA",
          neg: "WEREN'T",
          traN: "VOCÊ NÃO ERA",
          pronI: "YOU?",
          traI: "VOCÊ ERA?",
        },
        {
          pron: "HE",
          aff: "WAS",
          tra: "ELE ERA",
          neg: "WASN'T",
          traN: "ELE NÃO ERA",
          pronI: "HE?",
          traI: "ELE ERA?",
        },
        {
          pron: "SHE",
          aff: "WAS",
          tra: "ELA ERA",
          neg: "WASN'T",
          traN: "ELA NÃO ERA",
          pronI: "SHE?",
          traI: "ELA ERA?",
        },
        {
          pron: "IT",
          aff: "WAS",
          tra: "ELE/ELA ERA",
          neg: "WASN'T",
          traN: "ELE/ELA NÃO ERA",
          pronI: "IT?",
          traI: "ELE/ELA ERA?",
        },
        {
          pron: "WE",
          aff: "WERE",
          tra: "NÓS ÉRAMOS",
          neg: "WEREN'T",
          traN: "NÓS NÃO ÉRAMOS",
          pronI: "WE?",
          traI: "NÓS ÉRAMOS?",
        },
        {
          pron: "YOU",
          aff: "WERE",
          tra: "VOCÊS ERAM",
          neg: "WEREN'T",
          traN: "VOCÊS NÃO ERAM",
          pronI: "YOU?",
          traI: "VOCÊS ERAM?",
        },
        {
          pron: "THEY",
          aff: "WERE",
          tra: "ELES/ELAS ERAM",
          neg: "WEREN'T",
          traN: "ELES/ELAS NÃO ERAM",
          pronI: "THEY?",
          traI: "ELES/ELAS ERAM?",
        },
      ],
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
