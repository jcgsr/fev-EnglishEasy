<template>
  <b-container>
    <Header6 />
    <b-card class="shadow-lg">
      <b-card-title>Ordinal Numbers</b-card-title>
      <b-card-sub-title>Números Ordinais</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>
         Ordinal Numbers. Os números ordinais, como o próprio nome diz, servem para mostrar uma ordem, uma posição, uma classificação ou uma sequência. Confere a tabela abaixo do primeiro até o 100º:
        </p>
      </b-card-text>
      <b-row class="inside-cards">
        <b-col>
          <b-card class="shadow mb-2 cards">
            <b-table class="text-danger" striped hover :items="items">
            </b-table>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
import Header6 from "./Header6";
export default {
  name: "OrdinalNumbers",
  components: {
    Header6,
  },
  data() {
    return {
      items: [
        { Number: "0th", Translation: "ZEROTH" },
        { Number: "1st", Translation: "FIRST" },
        { Number: "2nd", Translation: "SECOND" },
        { Number: "3rd", Translation: "THIRD" },
        { Number: "4th", Translation: "FOURTH" },
        { Number: "5th", Translation: "FIFTH" },
        { Number: "6th", Translation: "SIXTH" },
        { Number: "7th", Translation: "SEVENTH" },
        { Number: "8th", Translation: "EIGHTH" },
        { Number: "9th", Translation: "NINTH" },
        { Number: "10th", Translation: "TENTH" },
        { Number: "11th", Translation: "ELEVENTH" },
        { Number: "12th", Translation: "TWELFTH" },
        { Number: "13th", Translation: "THIRTEENTH" },
        { Number: "14th", Translation: "FOURTEENTH" },
        { Number: "15th", Translation: "FIFTEENTH" },
        { Number: "16th", Translation: "SIXTEENTH" },
        { Number: "17th", Translation: "SEVENTEENTH" },
        { Number: "18th", Translation: "EIGHTEENTH" },
        { Number: "19th", Translation: "NINETEENTH" },
        { Number: "20th", Translation: "TWENTIETH" },
        { Number: "21st", Translation: "TWENTY-FIRST" },
        { Number: "22nd", Translation: "TWENTY-SECOND" },
        { Number: "23rd", Translation: "TWENTY-THIRD" },
        { Number: "24th", Translation: "TWENTY-FOURTH" },
        { Number: "25th", Translation: "TWENTY-FIFTH" },
        { Number: "26th", Translation: "TWENTY-SIXTH" },
        { Number: "27th", Translation: "TWENTY-SEVENTH" },
        { Number: "28th", Translation: "TWENTY-EIGHTH" },
        { Number: "29th", Translation: "TWENTY-NINTH" },
        { Number: "30th", Translation: "THIRTIETH" },
        { Number: "40th", Translation: "FORTIETH" },
        { Number: "50th", Translation: "FIFTIETH" },
        { Number: "60th", Translation: "SIXTIETH" },
        { Number: "70th", Translation: "SEVENTIETH" },
        { Number: "80th", Translation: "EIGHTIETH" },
        { Number: "90th", Translation: "NINETIETH" },
        { Number: "100th", Translation: "ONE HUNDREDTH" },
      ],
    };
  },
};
</script>