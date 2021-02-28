<template>
  <b-container>
    <Header6 />
    <b-card class="shadow-lg">
      <b-card-title>Telling Time</b-card-title>
      <b-card-sub-title>Dizer as Horas</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">

      </b-card-text>
      <b-col>
        <b-card
        class="shadow mb-2"
        title="Time"
        sub-title="Horas"
        >
        <img src="../../assets/clock.jpg" alt="Relógio Despertador" />
        <p class="img-p">
          Imagem do site
          <a href="https://www.pexels.com/pt-br/foto/despertador-vermelho-e-branco-exibindo-9-11-280254/">
            Pexels
          </a>
        </p>
        <b-card-text class="mt-2 md-w-75 text-center mx-auto">

         <h5>Palavras Essenciais</h5>
         <ul>
           <li><strong>to</strong> (para)</li>
           <li><strong>past/after</strong> (depois de/das, "passado")</li>
           <li><strong>before</strong> (antes de/das)</li>
           <li><strong>o'clock</strong> (em ponto)</li>
           <li><strong>a quarter</strong> (15 minutos, "um quarto de uma hora")</li>
           <li><strong>half</strong> (30 minutos, "metade de uma hora")</li>
           <li><strong>a.m./AM</strong> ("antes do meio-dia")</li>
           <li><strong>p.m./PM</strong> ("depois do meio-dia")</li>
           <li><strong>it is/it's</strong> (é, são)</li>
           <li><strong>midday/noon</strong> (meio-dia)</li>
           <li><strong>midnight</strong> (meia-noite)</li>
           <li><strong>at</strong> (à/às)</li> 
           <li><strong>oh</strong> (0 entre 1 e 9)</li>          
         </ul>
         <h5>Exemplos</h5>
         <p>Informando das 08 horas até às 09 horas.</p>
         <ul>
           <li>08:00 - <strong>eight o'clock</strong> (08 em ponto)</li>
           <li>08:08 - <strong>eight past/after eight, eight (oh) eight</strong></li>
           <li>08:10 - <strong>ten past/after eight, eight ten</strong></li>
           <li>08:12 - <strong>twelve past/after eight, eight twelve</strong></li>
           <li>08:15 - <strong>a quarter past/after eight, eight fifteen</strong></li>
           <li>08:18 - <strong>eighteen past/after eight, eight eighteen</strong></li>
           <li>08:20 - <strong>twenty past/after eight, eight twenty</strong></li>
           <li>08:28 - <strong>twenty-eight past/after eight, eight twenty-eight</strong></li>
           <li>08:30  - <strong>half <strong class="text-primary">past</strong> eight, eight thirty</strong></li>
           <li>08:38 - <strong>twenty-two <strong class="text-primary">to</strong> nine, eight thirty-eight</strong></li>
           <li>08:45 - <strong>a quarter to nine, eight forty-five</strong></li>
           <li>08:50 - <strong>ten to nine, eight fifty</strong></li>
           <li>08:58 - <strong>two to nine, eight fifty-eight</strong></li>
           <li>09:00 - <strong>nine o'clock</strong></li>
         </ul>
         <div class="rules">
           <h5>Dicas e Observações</h5>
           <ol>
             <li>do primeiro minuto até 29 (08:01 até 08:29), usa-se <strong class="text-primary">past/after</strong> para dizer que já se passaram n minutos.</li>
             <li>do minuto 31 até 59 (08:01 até 08:29), usa-se <strong class="text-primary">to</strong> para dizer que faltam n minutos para o próxima hora.</li>
             <li>da hora exata até 30 minutos (de 08:00 até 08:30), a referência é a própria hora ao se utilizar <strong>"past/after"</strong>. Só ver os exemplos acima: a hora em questão (08) sempre está presente.</li>
             <li>dos 31 minutos em diante (08:31), a referência é a hora seguinte caso se utilize <strong>"to"</strong>. Só ver os exemplos acima: a hora seguinte (09) sempre está presente.</li>
             <li>basta usar <strong>a.m.</strong> quando for madrugada/manhã e <strong>p.m.</strong> quando for tarde/noite. E.: 03:08 a.m. (03:08 da madrugada). 03:08 p.m. (03:08 da tarde). </li>
             <li>12 p.m. - meio-dia.</li>
             <li>12 a.m. - meia-noite.</li>  
             <li>"oh" equivale a 0 do minuto 1 até 09 (08:01 até 08:09).</li>
             <li><strong>o'clock</strong> só é usado de 1 até 12: caso se use o sistema de 24 horas, as expressões <em>13 o'clock</em>, <em>14 o'clock...</em> não existem.</li>          
           </ol>
         </div>
       </b-card-text>
     </b-card>
   </b-col>

 </b-card>
</b-container>
</template>

<script>
import Header6 from "./Header6.vue";
export default {
  name: "Articles",
  components: { Header6 },
};
</script>

<style>
img {
  width: 50%;
}
ul li {
  text-align: left;
}
.img-p {
  font-size: x-small;
}
.rules {
  text-align: left;
}
</style>
