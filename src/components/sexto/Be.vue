<template>
  <b-container>
    <Header6 />
    <!-- component -->
    <b-card class="shadow-lg">
      <b-card-title class="">Verb To Be</b-card-title>
      <b-card-sub-title>Verbo Ser/Estar</b-card-sub-title>
      <b-card-text class="text-center mt-2">
        <p>
          Um dos verbos mais importantes em inglês, o verbo
          <strong>"to be"</strong> é o mais usado nessa língua. Ele serve para
          descrever <strong>algo</strong> ou
          <strong>alguém</strong>.
        </p>

        <p>
          Em inglês, pode ser usado para dizer coisas diferentes de acordo com o
          contexto. Possui três flexões no Presente Simples:
          <strong>am, is, are</strong>. Confere os seus usos nas tabelas abaixo.
         <em class="text-primary">Dica:</em>  <strong>am</strong> sempre com <strong>I</strong>,
          <strong>is</strong> sempre com <strong>he, she, it</strong> e
          <strong>are</strong> com todos os outros.
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
          <b-card
            class="shadow mb-2"
          >
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
        <b-col>
          <b-card
            class="shadow mb-2"
          >
            <table>
              <thead>
                <tr>
                  <th>Contracted (Affirm.)</th>
                </tr>
                <hr />
              </thead>
              <t-body>
                <tr v-for="item in be" :key="item.index">
                  <td>
                    {{ item.pron
                    }}<strong class="text-primary">{{ item.cont }}</strong>
                  </td>
                  <td>
                    {{ item.tra }}
                  </td>
                </tr>
              </t-body>
            </table>
          </b-card>
        </b-col>
        <b-col md="6" lg="4">
          <b-card
            class="shadow mb-2"
          >
            <table>
              <thead>
                <tr>
                  <th>Contracted (Neg.)</th>
                </tr>
                <hr />
              </thead>
              <t-body>
                <tr v-for="item in be" :key="item.index">
                  <td>
                    {{ item.pron }}
                    <strong class="text-primary">{{ item.contN }}</strong>
                  </td>
                  <td>
                    {{ item.traN }}
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
import Header6 from "./Header6";
export default {
  name: "Be",
  components: {
    Header6,
  },
  data() {
    return {
      be: [
        {
          pron: "I",
          aff: "AM",
          tra: "EU SOU/ESTOU",
          neg: "AM NOT",
          traN: "EU NÃO SOU/ESTOU",
          pronI: "I?",
          traI: "EU SOU/ESTOU?",
          cont: "'M",
          contN: "AM NOT",
        },
        {
          pron: "YOU",
          aff: "ARE",
          tra: "VOCÊ É/ESTÁ",
          neg: "ARE NOT",
          traN: "VOCÊ NÃO É/ESTÁ",
          pronI: "YOU?",
          traI: "VOCÊ É/ESTÁ?",
          cont: "'RE",
          contN: "AREN'T",
        },
        {
          pron: "HE",
          aff: "IS",
          tra: "ELE É/ESTÁ",
          neg: "IS NOT",
          traN: "ELE NÃO É/ESTÁ",
          pronI: "HE?",
          traI: "ELE É/ESTÁ?",
          cont: "'S",
          contN: "ISN'T",
        },
        {
          pron: "SHE",
          aff: "IS",
          tra: "ELA É/ESTÁ",
          neg: "IS NOT",
          traN: "ELA NÃO É/ESTÁ",
          pronI: "SHE?",
          traI: "ELA É/ESTÁ?",
          cont: "'S",
          contN: "ISN'T",
        },
        {
          pron: "IT",
          aff: "IS",
          tra: "ELE/ELA É/ESTÁ",
          neg: "IS NOT",
          traN: "ELE/ELA NÃO É/ESTÁ",
          pronI: "IT?",
          traI: "ELE/ELA É/ESTÁ?",
          cont: "'S",
          contN: "ISN'T",
        },
        {
          pron: "WE",
          aff: "ARE",
          tra: "NÓS SOMOS/ESTAMOS",
          neg: "ARE NOT",
          traN: "NÓS NÃO SOMOS/ESTAMOS",
          pronI: "WE?",
          traI: "NÓS SOMOS/ESTAMOS?",
          cont: "'RE",
          contN: "AREN'T",
        },
        {
          pron: "YOU",
          aff: "ARE",
          tra: "VOCÊ É/ESTÁ",
          neg: "ARE NOT",
          traN: "VOCÊ NÃO É/ESTÁ",
          pronI: "YOU?",
          traI: "VOCÊ É/ESTÁ?",
          cont: "'RE",
          contN: "AREN'T",
        },
        {
          pron: "THEY",
          aff: "ARE",
          tra: "ELES/ELAS SÃO/ESTÃO",
          neg: "ARE NOT",
          traN: "ELES/ELAS NÃO SÃO/ESTÃO",
          pronI: "THEY?",
          traI: "ELES/ELAS SÃO/ESTÃO?",
          cont: "'RE",
          contN: "AREN'T",
        },
      ],
    };
  },
};
</script>

<style>
tr,
td,
th {
  padding: 0.2rem; 
}
