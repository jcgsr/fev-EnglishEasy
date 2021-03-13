<template>
  <b-container>
    <Header8 />
    <b-card class="shadow-lg mb-4">
      <b-card-title>Used to</b-card-title>
      <b-card-sub-title>Costumava</b-card-sub-title>
      <b-card-text
      class="mt-2 md-w-75
      text-center mx-auto"
      >
      <p>
       <strong>Used to</strong> + verbo é usado para falar sobre estados ou ações que eram verdadeiras ou ocorriam no passado regularmente, mas não são verdadeiras ou não acontecem mais agora. Não te esqueças: <strong>used to</strong> sempre se refere ao passado. A tradução fica <strong>costumava</strong>.
      </p>
      <p>
        Em frases <u>afirmativa</u>s, sua forma jamais muda. Nas <u>negativas</u> a estrutura fica: <strong>did not/didn't <em>use</em> to</strong> + verbo. Percebe que fica <em>use</em> e não <em>used</em>. Nas <u>interrogativas</u>, fica <strong>did you/he/she <em>use</em> to</strong> + verbo. Aqui também: <em>use</em> e não <em>used</em>. Vê os exemplos abaixo.
      </p>
      <p>
        <ul>
          <li>
            <em>He <strong>used to</strong> play the guitar.</em> (Ele <strong>costumava</strong> tocar violão.) - Ele não toca mais...
          </li>
          <li>
            <em>He <strong>didn't use to</strong> play the piano.</em>(Ele <strong>não costumava</strong> tocar piano.) 
          </li>
          <li>
            <em><strong>Did</strong> she <strong>use to</strong> play the violin? (Ela <strong>costumava</strong> tocar violino?)</em>
          </li>
        </ul>
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
