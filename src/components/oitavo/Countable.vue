<template>
  <b-container>
    <Header8 />
    <b-card class="shadow-lg mb-4">
      <b-card-title>Countable and Uncountable Nouns</b-card-title>
      <b-card-sub-title>Substantivos Contáveis e Incontáveis</b-card-sub-title>
      <b-card-text
      class="mt-2 md-w-75
      text-center mx-auto"
      >
      <p>
        Os substantivos podem ser contáveis ou incontáveis. Substantivos <em>contáveis</em> podem ser <u>contados</u>: <em>um</em> cachorro, <em>dois</em> cachorros, etc. Substantivos <em>incontáveis</em> não podem ser contados: ar, água, etc. Simples assim.
      </p>
      <h5>Substantivos Contáveis</h5>
      <p>
       Os contáveis podem ser singular ou plural. Para frases <u>afirmativas</u> no singular, usa-se <em><strong>a/an (um, uma)</strong></em> e <em><strong>some (alguns, algumas)</strong></em> no plural. Ex.: <br />
       <em>I have <strong>a</strong> guitar</em>. (Eu tenho <strong> um</strong> violão.) <br />
       <em>I have <strong>some</strong> friends.</em> (Eu tenho
       <strong>alguns</strong> amigos.)
     </p>
     <p>
      Para frases <u>negativas</u> e <u>interrogatvas</u>, usa-se
      <em><strong>a/an (um, uma)</strong></em> e
      <em><strong>any (alguns, algumas)</strong></em> no plural.
      Ex.: <br /> <em>I don't have <strong>a</strong> guitar</em>. (Eu não tenho <strong> um</strong> violão.) <br />
      <em>I don't have <strong>any</strong> friends.</em> (Eu não tenho <strong>nenhum</strong> amigo.) <br>
      <em>Do you have <strong>a</strong> guitar?</em> (Você tem <strong>um</strong> violão?) <br>
      <em>Do you have <strong>any</strong> friends?</em> (Você tem <strong>algum</strong> amigo?)
    </p>
    <p>
      <strong>a few</strong> (um pouco, poucos) e <strong>many</strong> (muitos) são usados com os contáveis. Ex.: <em>many/a few dollars</em>.
    </p>
    <p>
      Atenta para o detalhe de que nas frases interrrogativas e negativas no plural, a tradução mais indicada de <em>any</em> é <em>"nenhum, algum"</em>, ou seja, no singular.
    </p>
    <h5>Substantivos Incontáveis</h5>
    <p>
      Diferente dos contáveis, os incontáveis são <strong>substâncias</strong>, <strong>conceitos</strong> que não podem ser divididos em elementos separados. Por isso ficam no singular geralmente. Não se pode "contá-los". Por exemplo, não se pode contar <em>"leite"</em>, mas se pode contar <em>"garrafas de leite"</em> ou <em>"litros de leite"</em>. Vê abaixo mais alguns substantivos incontáveis que podem confundir um pouco, uma vez que alguns deles podem ser contados em português:
    </p>
    <ul>
      <li>music, art, love, happiness, advice, information, news</li>
      <li>furniture, luggage, rice, sugar, butter, water</li>
      <li>electricity, gas, power, money, currency</li>
    </ul>
    <p>
      Como os incontáveis geralmente ficam no singular, não se usa <em>a/an</em> com eles, mas <strong>some</strong> na afirmativa e <strong>any</strong> na negativa e interrrogativa. Ex.: <br>
      <em>I have <strong>some</strong> money.</em> (Eu tenho <strong>algum</strong> dinheiro.) <br>
      <em>Do you have <strong>any</strong> money?</em> (Você tem <strong>algum</strong> dinheiro?)
    </p>
    <p>
      <strong>A little</strong> (um pouco) e <strong>much</strong> (muito) também são usados com os incontáveis. Ex.: <em>a little/much money</em>.
    </p>
  </b-card-text>
</b-card>
</b-container>
</template>

<script>
  import Header8 from "./Header8";

  export default {
    name: "CountableUncountable",
    components: { Header8 },
  };
</script>
<style lang="css" scoped>
td,
th,
tr {
  border: 1px solid red;
  padding: 1rem;
  text-align: left;
}
table {
  margin: 0 auto;
}
.att {
  padding: 0.3rem;
  color: blue;
  background-color: #ddd;
}
.att p {
  padding: 0.2rem;
}
</style>
