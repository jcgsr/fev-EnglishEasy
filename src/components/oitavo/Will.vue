<template>
  <b-container>
    <Header8 />
    <b-card class="shadow-lg mb-4">
      <b-card-title>Future (will)</b-card-title>
      <b-card-sub-title>Futuro (will)</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>
          O futuro com <strong>will</strong> expressa uma decisão espontânea, uma suposição em relação ao futuro ou uma ação no futuro que não pode ser influenciada. Em português, esse auxiliar não terá tradução, servido apenas para colocar o verbo principal no futuro simples, que quase não é mais usado. Ex.: <em>"Ele <strong>vencerá</strong>."</em> → <em>"He <strong>will</strong> win."</em>
        </p>
        <p>
         <strong>Will</strong> nunca muda de forma, sendo o mesmo para todas as pessoas (<em>I, you, he, etc</em>). Existe também <strong>shall</strong>, que tem a mesma função de <strong>will</strong>. Essa forma é usada <u>somente</u> com os pronomes pessoais <em>"I"</em> e <em>"We"</em>. Porém, é uma forma muito antiquada.  O verbo principal <u>não</u> recebe a partícula <strong>"to"</strong> para formar o infinitivo. 
       </p>
       <p>
         Na forma <em>negativa</em>, basta adicionar <strong>not</strong> após <strong>will</strong> = <strong>will not</strong>. Essa forma pode ser contraída, ficando <strong>won't</strong>. Na <em>interrogativa</em>, basta colocar <strong>will</strong> no início da frase. Vê a estrutura do <strong>will</strong>, as contrações e depois a tabela com a conjugação completa do verbo <em>to win</em> no futuro simples. Não te esqueças das observações.
       </p>    
       <h5>Estrutura <em>afirmativa</em> e <em>negativa</em></h5> 
       <table class="mb-4">       
         <tbody>
           <tr>
             <th>Sujeito</th>
             <th>Will/Won't</th>
             <th>Verbo (sem <em>"to"</em>)</th>
           </tr>
           <tr>
             <td>I, you, he, etc</td>
             <td>will</td>
             <td>die.</td>
           </tr>
           <tr>
             <td>I, you, he, etc</td>
             <td>will not/won't</td>
             <td>die.</td>
           </tr>
         </tbody>
       </table>
       <h5>Estrutura <em>interrogativa</em></h5> 
       <table class="mb-4">       
         <tbody>
           <tr>
             <th>Will</th>
             <th>Sujeito</th>
             <th>Verbo (sem <em>"to"</em>)</th>
           </tr>
           <tr>
             <td>Will</td>
             <td>I, you, he, etc</td>
             <td>die?</td>
           </tr>
         </tbody>
       </table>
       <h5>Contrações</h5> 
       <table class="mb-4">       
         <tbody>
           <tr>
             <th>Sujeito + will</th>            
             <th>Contrações</th>
           </tr>
           <tr>
             <td>I will</td>           
             <td>I'll</td>
           </tr>
           <tr>
            <td>You will</td>           
            <td>You'll</td>
          </tr>
          <tr>
           <td>He will</td>           
           <td>He'll</td>
         </tr>
         <tr>
           <td>She will</td>           
           <td>She'll</td>
         </tr>
         <tr>
           <td>It will</td>           
           <td>It'll</td>
         </tr>
         <tr>
           <td>We will</td>           
           <td>We'll</td>
         </tr>
         <tr>
           <td>You will</td>           
           <td>You'll</td>
         </tr>
         <tr>
           <td>They will</td>           
           <td>They'll</td>
         </tr>  
         <tr>
           <td>will not</td>
           <td>won't</td>
         </tr>      

       </tbody>
     </table>

     <b-row>
      <b-col>
        <b-card class="shadow mb-2 cards">
          <span>Afirmativa</span>
          <b-table class="text-danger" striped hover :items="itemsA">
          </b-table>
        </b-card>
      </b-col>  
      <b-col>
        <b-card class="shadow mb-2 cards">
          <span>Negativa</span>
          <b-table class="text-danger" striped hover :items="itemsN">
          </b-table>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="shadow mb-2 cards">
          <span>Interrogativa</span>
          <b-table class="text-danger" striped hover :items="itemsI">
          </b-table>
        </b-card>
      </b-col>
    </b-row>
    <h5 class="mt-4">Usos</h5>
    <ul>
      <li>
        Decisão espontânea: <em><strong>I'll</strong> help you now.</em> (<strong>Ajudar-te-ei agora.</strong>)
      </li>
      <li>
        Opinião, esperança, incerteza ou suposição em relação ao futuro: <em>Dad <strong>will</strong> probably come back tomorrow.</em> (Painho <strong>deverá</strong> voltar amanhã provavelmente.)
      </li>
      <li>
        Promessa: <em>I <strong>will</strong> stop playing PS4.</em> (<strong>Pararei</strong> de jogar PS4.)
      </li>
      <li>
       Ação no futuro que não pode ser influenciada: <em>It <strong>will </strong>rain tomorrow.</em> (<strong>Choverá</strong> amanhã.) 
     </li>
     <li>
      Na forma negativa, para expressar relutância: <em>The baby <strong>won't</strong> eat his soup.</em>(O bebê <strong>não tomará</strong> sua sopa.) - Nesse uso específico, uma possível tradução mais adequada seria <strong>"não quer"</strong> (O bebê <strong>não quer tomar</strong> sua sopa.).
    </li>
    <li>
      <strong>Shall</strong>: No inglês moderno, prefere-se usar <strong>will</strong> a <strong>shall</strong>, que só deve ser usado com (<em>I - eu</em> e <em>we - nós</em>)  para fazer uma oferta ou sugestão, ou para pedir conselhos. Ex.: <br>
      <em><strong>Shall</strong> I open the window?</em> (<strong>Devo</strong> abrir a janela?) - Percebe que nessa frase a tradução ao pé da letra ficaria inadequada (<strong>Abrirei</strong> a janela?).<br>
      <em><strong>Shall</strong> we go to the cinema tonight?</em> (<strong>Vamos</strong> ao cinema hoje à noite?) <br>
      <em>What <strong>shall</strong> I tell mom about the broken window? </em>(O que <strong>direi</strong> a mainha sobre a janela quebrada?) <br>        
    </li>
  </ul>
  <h5>Diferenças entre <em>will</em> e <em>be going to</em></h5>
  <span>Acessa <router-link to="/begoingto">Be Going to</router-link></span>
  
</b-card-text>
</b-card>
</b-container>
</template>

<script>
import Header8 from "./Header8";

export default {
  name: "BeGoingTo",
  components: { Header8 },
  data() {
    return {
      itemsA: [
      { win: "I WILL WIN", vencer: "EU VENCEREI"},
      { win: "YOU WILL WIN", vencer: "VOCÊ VENCERÁ"},
      { win: "HE WILL WIN", vencer: "ELE VENCERÁ"},
      { win: "SHE WILL WIN", vencer: "ELA VENCERÁ"},
      { win: "IT WILL WIN", vencer: "ELE/ELA VENCERÁ"},
      { win: "WE WILL WIN", vencer: "NÓS VENCEREMOS"},
      { win: "YOU WILL WIN", vencer: "VOCÊS VENCERÃO"},
      { win: "THEY WILL WIN", vencer: "ELES/ELAS VENCERÃO"},
      ],
      itemsN: [
      { win: "I WON'T WIN", vencer: "EU NÃO VENCEREI"},
      { win: "YOU WON'T WIN", vencer: "VOCÊ NÃO VENCERÁ"},
      { win: "HE WON'T WIN", vencer: "ELE NÃO VENCERÁ"},
      { win: "SHE WON'T WIN", vencer: "ELA NÃO VENCERÁ"},
      { win: "IT WON'T WIN", vencer: "ELE/ELA NÃO VENCERÁ"},
      { win: "WE WON'T WIN", vencer: "NÓS NÃO VENCEREMOS"},
      { win: "YOU WON'T WIN", vencer: "VOCÊS NÃO VENCERÃO"},
      { win: "THEY WON'T WIN", vencer: "ELES/ELAS NÃO VENCERÃO"},
      ],
      itemsI: [
      { win: "WILL I WIN?", vencer: "EU VENCEREI?"},
      { win: "WILL YOU WIN?", vencer: "VOCÊ VENCERÁ?"},
      { win: "WILL HE WIN?", vencer: "ELE VENCERÁ?"},
      { win: "WILL SHE WIN?", vencer: "ELA VENCERÁ?"},
      { win: "WILL IT WIN?", vencer: "ELE/ELA VENCERÁ?"},
      { win: "WILL WE WIN?", vencer: "NÓS VENCEREMOS?"},
      { win: "WILL YOU WIN?", vencer: "VOCÊS VENCERÃO?"},
      { win: "WILL THEY WIN?", vencer: "ELES/ELAS VENCERÃO?"},
      ]
    };
  },
}

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
</style>
