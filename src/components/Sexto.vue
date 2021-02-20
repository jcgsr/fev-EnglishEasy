<template>
  <div class="sexto">
    <h1>6º Ano</h1>
    <!-- component -->
    <div class="w-full md:flex">
      <div class="flex flex-col m-auto bg-white p-auto">
        <h2
          class="flex px-5 mx-5 text-2xl font-bold text-red-500 lg:px-20 md:px-10 lg:mx-40 md:mx-20"
        >
          Verb To Be
        </h2>
        <h2
          class="flex mx-5 text-xl text-red-500 lg:px-20 md:px-10 lg:mx-40 md:mx-20"
        >
          Verbo Ser/Estar
        </h2>

        <div class="flex pb-10 overflow-x-scroll hide-scroll-bar">
          <div class="flex ml-10 flex-nowrap lg:ml-40 md:ml-20 ">
            <div class="inline-block px-3">
              <div
                class="max-w-xs p-2 overflow-hidden text-blue-600 bg-white rounded-lg shadow-md w-72 hover:shadow-xl transition-shadow duration-300 ease-in-out"
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

            <div class="inline-block px-3">
              <div
                class="max-w-xs p-2 overflow-hidden text-blue-600 bg-white rounded-lg shadow-md w-72 hover:shadow-xl transition-shadow duration-300 ease-in-out"
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

            <div class="inline-block px-3">
              <div
                class="max-w-xs p-2 overflow-hidden text-blue-600 bg-white rounded-lg shadow-md w-72 hover:shadow-xl transition-shadow duration-300 ease-in-out"
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
.hide-scroll-bar {
  -ms-overflow-style: none;

  scrollbar-width: none;
}

.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
.outer {
  display: flex;
  justify-content: space-around;
}
</style>
