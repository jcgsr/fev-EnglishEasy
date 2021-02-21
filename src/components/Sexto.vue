<template>
  <div class="w-full">
    <h1>6º Ano</h1>
    <!-- component -->
    <div>
      <div class="p-4 sm:m-6 bg-gray-50">
        <h2 class="text-2xl font-bold text-center text-red-500">Verb To Be</h2>
        <h2 class="text-xl mb-2 text-center text-red-500">Verbo Ser/Estar</h2>
<p class="text-red-500 p-2 sm:w-1/2 text-center m-auto">Um dos verbos mais importantes em inglês, o verbo <strong>"to be"</strong> é o mais usado nessa língua. Ele serve para descrever <strong class="text-red-500">algo</strong> ou <strong class="text-red-500">alguém</strong>.</p>
<p class="text-red-500 p-2 sm:w-1/2 text-center m-auto">Em inglês, pode ser usado para dizer coisas diferentes de acordo com o contexto. Possui três flexões no Presente Simples: <strong>am, is, are</strong>. Confere os seus usos nas tabelas abaixo. <i class="text-blue-500">Dica: </i><strong>am</strong> sempre com <strong>I</strong>, <strong>is</strong> sempre com <strong>he, she, it</strong> e <strong>are</strong> com todos os outros.</p>
        <div class="pb-10">
          <div class="block m-auto sm:flex sm:justify-between sm:flex-wrap">
            <div>
              <div
                class="p-2 m-auto mb-2 text-red-600 bg-white rounded-lg shadow-md w-72 hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <table>
                  <thead>
                    <tr>
                      <th class="text-left text-red-500">Affirmative</th>
                    </tr>
                    <hr />
                  </thead>
                  <t-body>
                    <tr v-for="item in be" :key="item.index">
                      <td>
                       {{ item.pron }} <strong class="text-blue-500">{{ item.aff }}</strong>
                      </td>
                      <td>
                        {{ item.tra }}
                      </td>
                    </tr>
                  </t-body>
                </table>
              </div>
            </div>

            <div>
              <div
                class="p-2 m-auto mb-2 text-red-600 bg-white rounded-lg shadow-md w-72 hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <table>
                  <thead>
                    <tr>
                      <th class="text-left text-red-500">Negative</th>
                    </tr>
                    <hr />
                  </thead>
                  <t-body>
                    <tr v-for="item in be" :key="item.index">
                      <td>
                         {{ item.pron }} <strong class="text-blue-500">{{ item.neg }}</strong>
                      </td>
                      <td>
                       {{ item.traN }}
                      </td>
                    </tr>
                  </t-body>
                </table>
              </div>
            </div>

            <div>
              <div
                class="p-2 m-auto mb-2 text-red-600 bg-white rounded-lg shadow-md w-72 hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <table>
                  <thead>
                    <tr>
                      <th class="text-left text-red-500">Interrrogative</th>
                    </tr>
                    <hr />
                  </thead>
                  <t-body>
                    <tr v-for="item in be" :key="item.index">
                      <td>
                       <strong class="text-blue-500">{{ item.aff }}</strong> {{ item.pronI }}
                      </td>
                      <td>
                       {{ item.traI }}
                      </td>
                    </tr>
                  </t-body>
                </table>
              </div>
            </div>
            <div>
              <div
                class="p-2 m-auto mb-2 text-red-600 bg-white rounded-lg shadow-md w-72 hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <table>
                  <thead>
                    <tr>
                      <th class="text-left text-red-500">
                        Contracted (Affirm.)
                      </th>
                    </tr>
                    <hr />
                  </thead>
                  <t-body>
                    <tr v-for="item in be" :key="item.index">
                      <td>
                        {{ item.pron }}<strong class="text-blue-500">{{ item.cont }}</strong>                       
                      </td>
                      <td>
                         {{ item.tra }}
                      </td>
                    </tr>
                  </t-body>
                </table>
              </div>
            </div>
            <div>
              <div
                class="p-2 m-auto mb-2 text-red-600 bg-white rounded-lg shadow-md w-72 hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <table>
                  <thead>
                    <tr>
                      <th class="text-left text-red-500">Contracted (Neg.)</th>
                    </tr>
                    <hr />
                  </thead>
                  <t-body>
                    <tr v-for="item in be" :key="item.index">
                      <td>
                        {{ item.pron }} <strong class="text-blue-500">{{ item.contN }}</strong>
                      </td>
                       <td>
                         <strong>{{ item.traN }}</strong>
                      </td>
                    </tr>
                  </t-body>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
          contN: "ARENT",
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
