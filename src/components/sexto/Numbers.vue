<template>
  <b-container>
    <Header6 />
    <b-card class="shadow-lg">
      <b-card-title>Cardinal Numbers</b-card-title>
      <b-card-sub-title>Números Cardinais</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>
          Os números cardinais (um, dois, três, etc.) são adjetivos que se
          referem à quantidade. Confere a tabela abaixo de 0 a 100:
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
  name: "PossessiveAdj",
  components: {
    Header6,
  },
  data() {
    return {
      items: [
        { Number: "0", Translation: "ZERO" },
        { Number: "1", Translation: "ONE" },
        { Number: "2", Translation: "TWO" },
        { Number: "3", Translation: "THREE" },
        { Number: "4", Translation: "FOUR" },
        { Number: "5", Translation: "FIVE" },
        { Number: "5", Translation: "SIX" },
        { Number: "7", Translation: "SEVEN" },
        { Number: "8", Translation: "EIGHT" },
        { Number: "9", Translation: "NINE" },
        { Number: "10", Translation: "TEN" },
        { Number: "11", Translation: "ELEVEN" },
        { Number: "12", Translation: "TWELVE" },
        { Number: "13", Translation: "THIRTEEN" },
        { Number: "14", Translation: "FOURTEEN" },
        { Number: "15", Translation: "FIFTEEN" },
        { Number: "16", Translation: "SIXTEEN" },
        { Number: "17", Translation: "SEVENTEEN" },
        { Number: "18", Translation: "EIGHTEEN" },
        { Number: "19", Translation: "NINETEEN" },
        { Number: "20", Translation: "TWENTY" },
        { Number: "21", Translation: "TWENTY-ONE" },
        { Number: "22", Translation: "TWENTY-TWO" },
        { Number: "23", Translation: "TWENTY-THREE" },
        { Number: "24", Translation: "TWENTY-FOUR" },
        { Number: "25", Translation: "TWENTY-FIVE" },
        { Number: "26", Translation: "TWENTY-SIX" },
        { Number: "27", Translation: "TWENTY-SEVEN" },
        { Number: "28", Translation: "TWENTY-EIGHT" },
        { Number: "29", Translation: "TWENTY-NINE" },
        { Number: "30", Translation: "THIRTY" },
        { Number: "40", Translation: "FORTY" },
        { Number: "50", Translation: "FIFTY" },
        { Number: "60", Translation: "SIXTY" },
        { Number: "70", Translation: "SEVENTY" },
        { Number: "80", Translation: "EIGHTY" },
        { Number: "90", Translation: "NINETY" },
        { Number: "100", Translation: "ONE HUNDRED" },
      ],
    };
  },
};
</script>

<style></style>
