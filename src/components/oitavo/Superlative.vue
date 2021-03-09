<template>
  <b-container>
    <Header8 />
    <b-card class="shadow-lg mb-4">
      <b-card-title>Adjectives (Superlative)</b-card-title>
      <b-card-sub-title>Superlativo do Adjetivo</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>
        O Superlativo do Adjetivo é usado para descrever 
        um objeto que está no limite superior ou inferior 
        de uma qualidade (<strong>o</strong> mais alto,
        <strong>o</strong> menor, <strong>a</strong> mais
        rápida, <strong>a</strong> mais alta). Eles são
        usados em frases onde alguém/algo é comparado a um
        grupo. 
        </p>
        <h5>Formação dos Superlativos</h5>
        <p>
          <ul>
            <li>Adjetivos de 1 sílaba regulares:</li>
            <ol type="i">
              <li>
               (cold, long, old) + <strong>est</strong> →
               cold<strong>est</strong>, long<strong>est</strong>,
               old<strong>est</strong>
             </li>
             <li>
              terminados em <em>e</em> (fin<em>e</em>, nic<em>e</em>,
              rar<em>e</em>) + <strong>st</strong> →
              fin<em>e</em><strong>st</strong>,
              nic<em>e</em><strong>st</strong>, rar<em>e</em><strong>st</strong>
            </li>
            <li>
              CVC, isto é, final em Consoante-Vogal-Consoante (big, hot,
              thin), dobra-se a última consoante e, só depois,
              adiciona-se o sufixo <strong>"est"</strong> →
              bi<strong>ggest</strong>, ho<strong>ttest</strong>,
              thi<strong>nnest</strong>
            </li>
          </ol>
          <li>Adjetivos de 1 sílaba irregulares:</li>
          <ol type="i">
            <li>good → best</li>
            <li>bad → worst</li>
            <li>far → farthest/furthest</li>
            <li>little → least</li>
            <li>much → most</li>
          </ol>
          <li>Adjetivos de 2 sílabas:</li>
          <ol type="i">
            <li>
              (clever, narrow, quiet) + <strong>est</strong> →
              clever<strong>est</strong>, narrow<strong>est</strong>,
              quiet<strong>est</strong> 
            </li>
            <li>
              terminados <em>"y"</em> e antes dele tiver uma consoante,
              deve-se trocá-lo por <em>"i"</em> e só depois adicionar
              <strong>"est"</strong> (bus<em>y</em>, eas<em>y</em>,
              happ<em>y</em>) → bus<em>i</em><strong>est</strong>,
              eas<em>i</em><strong>est</strong>,
              happ<em>i</em><strong>est</strong>
            </li>
          </ol>
          <li>Adjetivos de 3 ou mais sílabas:</li>
          <ol type="i">
            <li>
              <strong>the most</strong> + (useful, interesting,
              complicated) → <strong>the most</strong> useful,
              <strong>the most</strong> interesting, <strong>the most</strong> complicated
            </li>
          </ol>
        </ul>          
      </p>
      <h6>Observações</h6>
      <p>
        <ul>
          <li>
            se quiseres comparar para menos, no lugar de
            <strong>"most"</strong>, usa <strong>"the least"</strong>
            (<strong>the least</strong> complicated); e em vez do sufixo
            <strong>"er"</strong>, também usa <strong>"the
            least"</strong> (<strong>the least</strong> quiet) 
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
  name: "SuperlativeOfAdj",
  components: { Header8 },
};
</script>
