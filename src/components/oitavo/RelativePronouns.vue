<template>
  <b-container>
    <Header8 />
    <b-card class="shadow-lg mb-4">
      <b-card-title>Relative Pronouns</b-card-title>
      <b-card-sub-title>Pronomes Relativos</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>
         Os Pronomes Relativos são usados para introduzir <em>orações relativas</em>. Essas orações nos dizem mais sobre pessoas e coisas. Ex.: Peter Parker, <strong>que</strong> é o Homem-Aranha, mora no Queens.
       </p>
       <p>
        Os Pronomes Relativos podem exercer a função de <em>sujeito</em> ou <em>objeto</em> do verbo, além de <em>posse</em>. Confere a tabela abaixo para saber quais são, seus usos e traduções.
      </p>
      <p>
        <table>
          <tbody>
            <tr>
              <th>SUJEITO</th>
              <th>OBJETO</th>
              <th>POSSE</th>   
              <th>Uso</th>            
            </tr>
            <tr>
              <td>
                <strong class="text-primary">who</strong> - que; <br>
                <strong class="text-primary">which</strong> - que; <br>
                <strong class="text-primary">that</strong> - que; 
              </td>
              <td>
                <strong class="text-primary">who/whom</strong> - que/quem; <br>
                <strong class="text-primary">which</strong> - que; <br>
                <strong class="text-primary">that</strong> - que; <br>                
              </td>
              <td>
                <strong class="text-primary">whose</strong> - cujo; <br>
                <strong class="text-primary">whose</strong> - cujo; <br>
                <strong class="text-primary"> ----- </strong> 
              </td>     
              <td>
                só com <strong>pessoas</strong><br>
                só com <strong>animais ou coisas</strong> <br>      
                com <strong>pessoas, animais ou coisas</strong>         
              </td>         
            </tr>             
          </tbody>
        </table>
      </p>
      <h5>Observações e Exemplos</h5>
      <p>
        <ul>
          <li>
            Não esqueças: <strong>who</strong> = <strong>pessoas</strong>; <strong>which</strong> = <strong>animais, coisas</strong>; <strong>that</strong> = qualquer um!
          </li>
          <li>
            Existem dois tipos de orações relativas em inglês:
            <ol>
              <li>
                a que deixa claro de que pessoa/coisa se fala: <br>
                <p>
                  <em> Stan Lee is the man <strong>who</strong> created Spider-Man.</em> (Stan Lee é o homem <strong>que</strong> criou Homem-Aranha.) Nessa oração relativa, <strong>who</strong> é sujeito porque responde a pergunta <em>"<strong>Quem</strong> criou?"</em> 
                </p>
                <p>
                 <em>This is the suit <strong>which</strong> Peter made.</em> (Essa é a roupa <strong>que</strong> Peter fez.)  Nessa oração relativa, <strong>which</strong> é objeto porque responde a pergunta <em>"<strong>O que</strong> foi feito?"</em> 
               </p>
               <p>
                Nas duas frases acima, pode-se substituir <strong>who</strong> e <strong>which</strong> por <strong>that</strong>: <em>Stan Lee is the man <strong>that</strong> created Spider-Man.</em> <em>This is the suit <strong>that</strong> Peter made.</em>
              </p>
              <div class="att mb-2">
               <p>
                 <u>Atenção</u>: o pronome relativo pode ser <strong>omitido</strong> se, e somente se, for o <em>objeto</em> do verbo. Portanto, <em>"This is the suit Peter made."</em> está correta. Nunca pode ser omitido, porém, se o pronome for <strong>sujeito</strong> do verbo como na primera frase.
               </p>
               <p>
                 <u>Cuidado</u>: sendo o pronome relativo o <em>sujeito</em> ou <em>objeto</em> da oração relativa, não se <strong>repete</strong> o sujeito ou objeto da mesma:  <em> Stan Lee is the man <strong>who</strong> <del>he</del> created Spider-Man.</em><em>This is the suit <strong>which</strong> Peter made <del>it</del>.</em>
               </p>
             </div>
           </li>
           <li>
             para dar mais informações, sempre separadas por <strong>vírgula</strong>:
             <p>
               <em>Stan Lee, <strong>who</strong> created Spider-Man, also created X-Men.</em> (Stan Lee, <strong>que</strong> criou o Homem-Aranha, também criou os X-Men.)
             </p>
             <p>
               <em>Spider-Man had cherry pie, <strong>which</strong> he always enjoys.</em> (O Homem-Aranha comeu torta de cereja, <strong>que</strong> ele sempre gosta.)
             </p>
             <div class="att mb-2">
               <p>
                <u>Cuidado</u>: nesse tipo de oração relativa, <strong>não</strong> se pode substituir <strong>who/which</strong> por <strong>that</strong> e nem tampouco omiti-los! <br><em>Stan Lee, <del><strong>that</strong></del> created Spider-Man, also created X-Men.</em><br>
                <del><em>Spider-Man had cherry pie, he always enjoys.</em></del>
               </p>
             </div>
           </li>
         </ol>
       </li>
       <li>
         <strong>whose</strong> é a forma <em>possessiva</em> de <strong>who</strong>. A tradução pode ser <strong>de quem/cujo</strong>. Ex.: <em>This is Spider-Man, <strong>whose</strong> nickname is Spidey</em> (Esse é o Spider-Man, <strong>cujo</strong> apelido é Spidey)
       </li>
       <li>
         <strong>whom</strong>, sempre usado com pessoas, sempre é o objeto do verbo, portanto, pode-se usar tanto <strong>who/whom</strong> quando o pronome relativo for <u>objeto</u>. Ex.:<em> This is Peter, <strong>whom</strong> Mary Jane fell in love with.</em> (Esse é Peter, por <strong>quem</strong> Mary Jane se apaixonou.)
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
  name: "RelativePronouns",
  components: { Header8 },
};
</script>
<style scoped>
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