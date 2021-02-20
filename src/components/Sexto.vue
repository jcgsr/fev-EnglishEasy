<template>
  <div class="w-full">
    <h1>6º Ano</h1>
    <!-- component -->
    <div class="">
      <div class="p-4 sm:m-6 bg-gray-50">
        <h2
          class="text-2xl font-bold text-center text-red-500"
        >
          Verb To Be
        </h2>
        <h2
          class="text-xl text-center text-red-500"
        >
          Verbo Ser/Estar
        </h2>

        <div class="pb-10">
          <div class="block m-auto sm:flex sm:justify-around">
            <div>
              <div
                class="p-2 m-auto mb-2 text-blue-600 bg-white rounded-lg shadow-md w-72 hover:shadow-xl transition-shadow duration-300 ease-in-out"
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
                        <strong>{{ item.aff }}</strong>
                      </td>
                      <td>
                        <strong>{{ item.tra }}</strong>
                      </td>
                    </tr>
                  </t-body>
                </table>
              </div>
            </div>

            <div>
              <div
                class="p-2 m-auto mb-2 text-blue-600 bg-white rounded-lg shadow-md w-72 hover:shadow-xl transition-shadow duration-300 ease-in-out"
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
                        <strong>{{ item.neg }}</strong>
                      </td>
                      <td>
                        <strong>{{ item.traN }}</strong>
                      </td>
                    </tr>
                  </t-body>
                </table>
              </div>
            </div>

            <div>
              <div
                class="p-2 m-auto mb-2 text-blue-600 bg-white rounded-lg shadow-md w-72 hover:shadow-xl transition-shadow duration-300 ease-in-out"
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
                        <strong>{{ item.int }}</strong>
                      </td>
                      <td>
                        <strong>{{ item.traI }}</strong>
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
          aff: "I AM",
          tra: "EU SOU/ESTOU",
          neg: "I AM NOT",
          traN: "EU NÃO SOU/ESTOU",
          int: "AM I?",
          traI: "EU SOU/ESTOU?",
        },
        {
          aff: "YOU ARE",
          tra: "VOCÊ É/ESTÁ",
          neg: "YOU ARE NOT",
          traN: "VOCÊ NÃO É/ESTÁ",
          int: "ARE YOU?",
          traI: "VOCÊ É/ESTÁ?",
        },
        {
          aff: "HE IS",
          tra: "ELE É/ESTÁ",
          neg: "HE IS NOT",
          traN: "ELE NÃO É/ESTÁ",
          int: "IS HE?",
          traI: "ELE É/ESTÁ?",
        },
        {
          aff: "SHE IS",
          tra: "ELA É/ESTÁ",
          neg: "SHE IS NOT",
          traN: "ELA NÃO É/ESTÁ",
          int: "IS SHE?",
          traI: "ELA É/ESTÁ?",
        },
        {
          aff: "IT IS",
          tra: "ELE/ELA É/ESTÁ",
          neg: "IT IS NOT",
          traN: "ELE/ELA NÃO É/ESTÁ",
          int: "IS IT?",
          traI: "ELE/ELA É/ESTÁ?",
        },
        {
          aff: "WE ARE",
          tra: "NÓS SOMOS/ESTAMOS",
          neg: "WE ARE NOT",
          traN: "NÓS NÃO SOMOS/ESTAMOS",
          int: "ARE WE?",
          traI: "NÓS SOMOS/ESTAMOS?",
        },
        {
          aff: "YOU ARE",
          tra: "VOCÊS SÃO/ESTÃO",
          neg: "YOU ARE NOT",
          traN: "VOCÊS NÃO SÃO/ESTÃO",
          int: "ARE YOU?",
          traI: "VOCÊS SÃO/ESTÃO?",
        },
        {
          aff: "THEY ARE",
          tra: "ELES/ELAS SÃO/ESTÃO",
          neg: "THEY ARE NOT",
          traN: "ELES/ELAS NÃO SÃO/ESTÃO",
          int: "ARE THEY?",
          traI: "ELES/ELAS SÃO/ESTÃO?",
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
