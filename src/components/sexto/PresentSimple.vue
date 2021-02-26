<template>
  <b-container>
    <Header6 />
    <b-card class="shadow-lg">
      <b-card-title>Present Simple</b-card-title>
      <b-card-sub-title>Presente Simples</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>
         O Presente Simples é usado quando se fala de: 
         <ul>
          <li>algo que é verdade no presente. Ex.: I  
            <strong class="text-primary">live</strong>  in Recife. 
            (Eu <strong class="text-primary">moro</strong> em Recife.)
          </li>
          <li>algo que acontece regularmente no presente. 
            Ex.: I <strong class="text-primary">play</strong> 
            the electric guitar every weekend. 
            (Eu <strong class="text-primary">toco</strong> 
            guitarra todo fim de semana.)
          </li>
          <li>algo que é sempre verdade. Ex.: The human body 
            <strong class="text-primary">contains</strong> 206 bones. 
            (O corpo humano <strong class="text-primary">contém</strong> 
          206 ossos.)</li>
        </ul>
        Muitas vezes usamos advérbios de frequência como 
        <strong>às vezes, sempre e nunca</strong> com o presente simples:
        <ul>
          <li>I <strong>sometimes</strong> 
            <strong class="text-primary">go</strong> to the cinema. 
            (<strong>Às vezes</strong> eu <strong class="text-primary">vou</strong> 
          ao cinema.)</li>
        </ul>
      </p>
      <div class="rules">
       <h5>Afirmativa</h5>
       <p>
        <ul>
          <li>
           Basta repetir a forma básica do verbo sem o <em>"to"</em>. 
           Só isso! Ex.: (verbo <em>to play</em> - jogar) 
           I <strong class="text-primary">play</strong> chess. 
           (Eu <strong class="text-primary">jogo</strong> xadrez.) <br>  
           Mas com a terceira pessoa do singular, <strong>he/she/it</strong>, 
           adicionar um <strong>s</strong> à forma básica do verbo. 
           Ex.: She <em>play<strong class="text-primary">s</strong></em> 
           chess. (Ela <strong class="text-primary">joga</strong> xadrez.)
         </li>
         <strong>Atenção:</strong> 
         <ol>
          <li>
            se algum verbo terminar com <strong class="text-primary">
            o, s, ss, sh, ch, x, z</strong> adicionar <strong 
            class="text-primary">es</strong> na terceira pessoa do 
            singular. Ex.: (verbo <em>to do</em> - fazer) She 
            do<strong class="text-primary">es </strong> the job well.
            (Ela <strong class="text-primary">faz </strong> o trabalho bem.)
          </li>
          <li>
            se o verbo terminar com <strong>y</strong> no final e 
            antes dele tiver uma consoante, por exemplo,  
            <strong>study</strong>, deve-se retirar o 
            <strong>y</strong> e adicionar <strong class="text-primary">
            ies</strong> no lugar quando for a terceira pessoa do singular.
            Ex.: (verbo <em>to cry</em> - chorar) He 
            cr<strong class="text-primary">ies</strong> a lot. 
            (Ele <strong class="text-primary">chora</strong> muito.)
          </li>
        </ol>
      </ul>
    </p>
    <h5>Negativa</h5>
    <p>
      <ul>
        <li>O verbo sempre ficará em sua forma básica. Sempre! Nunca 
          mudará! Ou seja, não recebe <strong>s, es, ies</strong>, pelo
        contrário: se tiver algum desses sufixos, perde-os.</li>
        <li>Deve-se usar os auxiliares <strong>do/does</strong>
          seguidos de <strong>not</strong> antes do verbo.
          <li><strong>do not = don't</strong> sempre com <strong>I, you,
          we, they</strong>.</li>
          <li><strong>does not = doesn't</strong> sempre com 
            <strong>he, she, it</strong>. Vê os exemplos:</li>
            <ol>
              <li>I <strong>do not</strong> see. (Eu <strong>não</strong> vejo.)</li>
              <li>She <strong>does not</strong> see. (Ela <strong>não</strong> vê.)</li>
              <li>We <strong>don't</strong> work. (Nós <strong>não</strong> trabalhamos.)</li>
              <li>He <strong>doesn't</strong> work. (Ele <strong>não
              </strong>trabalha.)</li>
            </ol>
          </ul>
        </p>
        <h5>Interrogativa</h5>
        <li>
          O verbo sempre ficará em sua forma básica. Sempre! Nunca 
          mudará! Ou seja, não recebe <strong>s, es, ies</strong>, igualzinho 
          como na negativa.
        </li>
        <li>Deve-se usar os auxiliares <strong>do/does</strong>
          no <strong>INÍCIO</strong> da frase com as mesmas pessoas
        da negativa. Vê os exemplos:</li>
        <ol>
          <li><strong>Do</strong> you live here? (Você mora aqui?)</li>
          <li><strong>Does</strong> he live here? (Ele mora aqui?)</li>
        </ol>
        Confere a conjugação completa abaixo do verbo <em>to die</em> (morrer):
      </div>
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


    </b-card-text>
  </b-card>
</b-container>
</template>

<script>
import Header6 from "./Header6";
export default {
  name: "PresentSimple",
  components: {
    Header6,
  },
  data() {
    return {
      itemsA: [
      { die: "I DIE", morrer: "EU MORRO"},
      { die: "YOU DIE", morrer: "VOCÊ MORRE"},
      { die: "HE DIES", morrer: "ELE MORRE"},
      { die: "SHE DIES", morrer: "ELA MORRE"},
      { die: "IT DIES", morrer: "ELE/ELA MORRE"},
      { die: "WE DIE", morrer: "NÓS MORREMOS"},
      { die: "YOU DIE", morrer: "VOCÊS MORREM"},
      { die: "THEY DIE", morrer: "ELES/ELAS MORREM"},
      ],
      itemsN: [
      { die: "I DON'T DIE", morrer: "EU NÃO MORRO"},
      { die: "YOU DON'T DIE", morrer: "VOCÊ NÃO MORRE"},
      { die: "HE DOESN'T DIE", morrer: "ELE NÃO MORRE"},
      { die: "SHE DOESN'T DIE", morrer: "ELA NÃO MORRE"},
      { die: "IT DOESN'T DIE", morrer: "ELE/ELA NÃO MORRE"},
      { die: "WE DON'T DIE", morrer: "NÓS NÃO MORREMOS"},
      { die: "YOU DON'T DIE", morrer: "VOCÊS NÃO MORREM"},
      { die: "THEY DON'T DIE", morrer: "ELES/ELAS NÃO MORREM"},
      ],
      itemsI: [
      { die: "DO I DIE?", morrer: "EU MORRO?"},
      { die: "DO YOU DIE?", morrer: "VOCÊ MORRE?"},
      { die: "DOES HE DIE?", morrer: "ELE MORRE?"},
      { die: "DOES SHE DIE?", morrer: "ELA MORRE?"},
      { die: "DOES IT DIE?", morrer: "ELE/ELA MORRE?"},
      { die: "DO WE DIE?", morrer: "NÓS MORREMOS?"},
      { die: "DO YOU DIE?", morrer: "VOCÊS MORREM?"},
      { die: "DO THEY DIE?", morrer: "ELES/ELAS MORREM?"},
      ]
    };
  },
};
</script>
<style scope>
.rules {
  text-align: left;
}
</style>
