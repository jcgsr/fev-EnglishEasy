<template>
  <b-container>
    <Header8 />
    <b-card class="shadow-lg mb-4">
      <b-card-title>Adjectives (Comparative)</b-card-title>
      <b-card-sub-title>Comparativo do Adjetivo</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>
          O Comparativo do Adjetivo é usado para comparar uma pessoa ou coisa com outra e permitindo dizer se uma pessoa ou coisa tem mais ou menos uma qualidade particular: <em>(maior que, menor que, mais rápido que, mais alto do que)</em>. Em português, o Comparativo se dá pelo uso de <strong>"mais"</strong> <em>antes</em> dos adjetivos regulares (<strong>mais</strong> alto, <strong>mais</strong> forte, etc). Em inglês, esse nosso <em>"mais"</em>, pode ser um sufixo <strong>"er"</strong>, ou seja, aparece <em>depois</em> dos adjetivos (tall<strong>er</strong>, strong<strong>er</strong>, etc) quando o adjetivo for curto (até duas sílabas), e também pode ser a palavras <strong>"more"</strong> quando o adjetivo tiver três ou mais sílabas. Te liga nos exemplos abaixo.
        </p>
        <h5>Formação dos Comparativos</h5>
        <p>
          <ul>
            <li>Adjetivos de 1 sílaba regulares:</li>
            <ol type="i">
              <li>
               (cold, long, old) + <strong>er</strong> → cold<strong>er</strong>, long<strong>er</strong>, old<strong>er</strong>
             </li>
             <li>
              terminados em <em>e</em> (fin<em>e</em>, nic<em>e</em>, rar<em>e</em>) + <strong>r</strong> → fin<em>e</em><strong>r</strong>, nic<em>e</em><strong>r</strong>, rar<em>e</em><strong>r</strong>
            </li>
            <li>
              CVC, isto é, final em Consoante-Vogal-Consoante (big, hot, thin), dobra-se a última consoante e, só depois,  adiciona-se o sufixo <strong>"er"</strong> → bi<strong>gger</strong>, ho<strong>tter</strong>, thi<strong>nner</strong>
            </li>
          </ol>
          <li>Adjetivos de 1 sílaba irregulares:</li>
          <ol type="i">
            <li>good → better</li>
            <li>bad → worse</li>
            <li>far → farther/further</li>
            <li>little → less</li>
            <li>much → more</li>
          </ol>
          <li>Adjetivos de 2 sílabas:</li>
          <ol type="i">
            <li>
              (clever, narrow, quiet) → clever<strong>er</strong>, narrow<strong>er</strong>, quiet<strong>er</strong> 
            </li>
            <li>
              terminados <em>"y"</em> e antes dele tiver uma consoante, deve-se trocá-lo por <em>"i"</em> e só depois adicionar <strong>"er"</strong> (bus<em>y</em>, eas<em>y</em>, happ<em>y</em>) → bus<em>i</em><strong>er</strong>, eas<em>i</em><strong>er</strong>, happ<em>i</em><strong>er</strong>
            </li>
          </ol>
          <li>Adjetivos de 3 ou mais sílabas:</li>
          <ol type="i">
            <li>
              <strong>more</strong> + (useful, interesting, complicated) → <strong>more</strong> useful, <strong>more</strong> interesting, <strong>more</strong> complicated
            </li>
          </ol>
        </ul>          
      </p>
      <h6>Observações</h6>
      <p>
        <ul>
          <li>
            se quiseres comparar para menos, no lugar de <strong>"more"</strong>, usa <strong>"less"</strong> (<strong>less</strong> complicated); e em vez do sufixo <strong>"er"</strong>, usa <strong>"not as/so ... as"</strong> (<strong>not as</strong> quiet <strong>as</strong>) 
          </li>
          <li>
            <strong>than</strong> → do que. Ex.: Spider-Man is strong<strong>er</strong> <strong>than</strong> any other one. (Homem-Aranha é <strong>mais</strong> forte <strong>do que</strong> qualquer outro.)
          </li>
          <li>
           <strong> as/so ... as</strong> → tão ... quanto. Ex.: <strong>as</strong> big <strong>as</strong> (tão grande quanto)
          </li>
          <li>
            <strong>hotter and hotter</strong> (<strong>cada vez mais</strong>) quente; <strong>more and more</strong> complicated (<strong>cada vez mais</strong> complicado)
          </li>
          <li>
            <strong>the</strong> hott<strong>er</strong> (<strong>quanto mais</strong> quente); <strong>the more</strong>  generous (<strong>quanto mais</strong> generoso). Atenção: se essa estrutura (<em>the + comparativo</em>) for usada duas vezes na mesma frase, na segunda vez, omite-se <em>"quanto"</em> na tradução. Ex.: <strong>The</strong> cold<strong>er</strong> it is, <strong>the</strong> laz<strong>ier</strong> I get. (<strong>Quanto mais</strong> quente, <strong>mais</strong> preguiçoso eu fico.)
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
  name: "ComparativeOfAdj",
  components: { Header8 },
};
</script>