<template>
  <b-container>
    <Header8 />
    <b-card class="shadow-lg mb-4">
      <b-card-title>Quantifiers</b-card-title>
      <b-card-sub-title>Quantificadores</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>
         Um quantificador é uma palavra que geralmente vem antes de um
         substantivo para expressar a <strong>quantidade</strong> 
         do objeto, por exemplo, "<em>um pouco</em> de leite". A 
         maioria dos quantificadores é seguida por
         um substantivo. Um quantificador é usado quando se quer dar
         alguma informação sobre o <em>número</em> de algo, como que
         respondendo as perguntas: <em>quanto(s)?</em>. Vê a tabela
         abaixo com alguns dos quantificadores mais usados.
       </p>

          <h5>Substantivos Contáveis e Incontáveis</h5>  

          <span>
            Esses quantificadores podem ser usados com qualquer tipo
            de substantivo.
          </span>
        <table class="mb-4 mt-4">
          <tbody>
             <tr>
              <td>
                <strong class="text-primary">all</strong> - tudo, todo(s)
              </td>
              <td>
                <strong class="text-primary">some</strong> - algum(ns)
              </td>
              <td>
                <strong class="text-primary">more</strong> - mais
              </td>     
                     
           </tr> 
            <tr>
             <td>
                <strong class="text-primary">a lot of</strong> - um
                monte de
              </td> 
              <td>
                <strong class="text-primary">enough</strong> -
                suficiente, bastante
              </td>         
               <td> <strong class="text-primary">less</strong> - menos
              </td>         
 
            </tr>
            <tr>
              <td>
                <strong class="text-primary">no</strong> - nenhum(a)
              </td>
              <td>
                <strong class="text-primary">any</strong> - qualquer,
                algum(ns)
              </td>
              <td>
                <strong class="text-primary">most</strong> - maioria
              </td>     
           </tr>             
          </tbody>
        </table>
      <h5>Usos e Exemplos</h5>
      <p>
        <ul>
          <li>
            <em>Spider-Man has <strong>a lot of</strong> time.</em> (Incontável -
            Homem-Aranha tem <strong>muito</strong> tempo.) <br>
            <em>Spider-Man has <strong>a lot of</strong> enemies.</em> (Contável -
            Homem-Aranha tem <strong>muitos</strong> inimigos.)
          </li>
          <li>
            <strong>some</strong> - usado em frases afirmativas como
            regra geral. Ex.:
            <em>Spider-Man saw <strong>some</strong> enemies.</em>
            (Homem-Aranha viu <strong>alguns</strong> inimigos.)
          </li>
          <li>
            <strong>any</strong> - usado em frases interrogativas e
            negativas. Quando usado na negativa, atradução mais adequada
            será <em>"nenhum(a)"</em>. Ex.: <br>
            <em>Does Peter have <strong>any</strong> children?</em>
            (Peter tem <strong>algum</strong> filho?) <br>
            <em>Peter didn't see <strong>any</strong> friends.</em> 
(Peter não viu <strong>nenhum</strong> amigo.)          </li>
    </ul>
   </p>
      <h5>Substantivos Contáveis</h5>  
          <span>
            Esses quantificadores só podem ser usados com substantivo
            <em>contavéis</em>.
          </span>
        <table class="mb-4 mt-4">
          <tbody>
             <tr>
              <td>
                <strong class="text-primary">(not) many</strong> - (não)
                muitos
              </td>
              <td>
                <strong class="text-primary">each</strong> - cada
              </td>
              <td>
                <strong class="text-primary">either</strong> - qualquer,
                cada, um ou outro
              </td>     
                     
            </tr> 
            <tr>
              <td>
                <strong class="text-primary">(a) few</strong> - (um
                pouco), poucos
                monte de
              </td>         
              <td>
                <strong class="text-primary">a couple of</strong> -
                alguns, dois
              </td> 
               <td>
                <strong class="text-primary">neither</strong> - nenhum
              </td> 
            </tr>
            <tr>
              <td>
                <strong class="text-primary">several</strong> - vários
              </td>
              <td>
                <strong class="text-primary">both</strong> - ambos
              </td>
               <td>
                <strong class="text-primary">fewer</strong> - menos
              </td>         
            </tr>             
          </tbody>
        </table>
      <h5>Usos e Exemplos</h5>
      <ul>
        <li>
          <strong>both, either, neither</strong> - usados com
          <strong>duas</strong> pessoas ou coisas. Ex.: <br>
          <em><strong>Both</strong> the schools were open.</em>
          (<strong>Ambas</strong> as escolas estavam abertas.) <br>
          <em><strong>Neither</strong> of the schools were open.</em>
          (<strong>Neunhma</strong> das escolas estava aberta.) <br>
        </li>
      </ul>
 <h5>Substantivos Incontáveis</h5>  
          <span>
            Esses quantificadores só podem ser usados com substantivo
            <em>incontavéis</em>.
          </span>
        <table class="mb-4 mt-4">
          <tbody>
             <tr>
              <td>
                <strong class="text-primary">(not) much</strong> - (não)
                muito
              </td>
              <td>
                <strong class="text-primary">a bit of</strong> - um
                pouco de
              </td>
              <td>
                <strong class="text-primary">a little</strong> - um
                pouco
              </td>     
            </tr> 
          </tbody>
        </table>
     <p>
       Para uma lista de substantivos contáveis e incontavéis, acessa a
       página <router-link to="/countable">deles</router-link>.
     </p> 
 </b-card-text>
</b-card>
</b-container>
</template>

<script>
import Header8 from "./Header8";

export default {
  name: "RelativePronouns",
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
  padding: .3rem;
  color: blue;
  background-color: #ddd;
}
.att p {
  padding: .2rem;
}
</style>
