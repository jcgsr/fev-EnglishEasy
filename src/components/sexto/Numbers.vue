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
      <h5>Dicas</h5>
      <ul>
        <li>do 13 até o 19, o uso do sufixo inglês <strong>teen</strong> significa <strong>"10"</strong>. Por isso, tenta lembra que  estás juntando o 3, 4, 5, 6, 7, 8, 9 com 10. Ex.: 4 + 10 = 14 (four + <strong>teen</strong> = four<strong>teen</strong>). Só cuidado com o <strong>13</strong> e <strong>15</strong> que muda um pouquinho a escrita do <strong>three</strong> e do <strong>five</strong>. O restante é só acrescentar <strong>teen</strong> ao número.</li>
        <li>o sufixo inglês <strong>ty</strong> das dezenas (twen<strong>ty</strong>, thir<strong>ty</strong> etc...) equivale ao nosso <strong>"inte", "inta", "enta"</strong> do 20 até 90.</li>
        <li><strong>hundred</strong> significa <strong>centena</strong>, então <strong>two hundred</strong> (sem "s") = duas centenas, ou seja, duzentos. Com essa última dica, tu já podes escrever até 999 em inglês 😁 seguindo a tabela acima. Por exemplo: 888 = eight hundred (and) eighty-eight.</li>
      </ul>
    </b-card>
  </b-container>
</template>

<script>
import Header6 from "./Header6";
export default {
  name: "CardinalNumbers",
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