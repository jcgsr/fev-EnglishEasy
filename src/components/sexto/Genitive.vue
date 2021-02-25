<template>
  <b-container>
    <Header6 />
    <b-card class="shadow-lg">
      <b-card-title>Genitive Case</b-card-title>
      <b-card-sub-title>Caso Genitivo</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>Também chamado de caso possessivo, o caso genitivo é quando adicionamos <strong class="text-primary">'s</strong> no final da palavra para mostrar posse, que algo pertence a outro ou um tipo de relação entre coisas e pessoas. A tradução pode ser <strong class="text-primary">"de", "do", "dos", "da", "das"</strong>. Vê o exemplo:</p>
        <p>
       <ul>
          <li>Jimmy<strong class="text-primary">'s</strong> guitar. (A guitarra <strong class="text-primary">de</strong> Jimmy.)</li>
       </ul>
        </p>
        <div class="rules">
         
          <h5>Regras</h5>
          <p>
            <ol>
             <li> Substantivos no singular:
          adicionar <strong class="text-primary">'s</strong>. Ex.: My father<strong class="text-primary">'s</strong> favorite band. (A banda favorita <strong class="text-primary">de</strong> meu pai.)</li>
          <li>Substantivos no plural terminados em <strong>"s"</strong>: adicionar apenas <strong class="text-primary">'</strong> sem a letra <strong>"s"</strong>. Ex.: The Beatles<strong class="text-primary">'</strong> second album. (O segundo disco <strong class="text-primary">dos</strong> Beatles.)</li>
          <li>Substantivos no plural que não terminam em <strong>"s"</strong>: adicionar <strong class="text-primary">'s</strong>. Ex.: The children<strong class="text-primary">'s</strong> piano. (O piano <strong class="text-primary">das</strong> crianças.)</li>
          <li>
            Substantivos no singular que terminam em <strong>"s"</strong> (nomes próprios):
            <ol type="a">
              <li>
                Adicionar <strong class="text-primary">'s</strong> na maioria. Ex.: James<strong class="text-primary">'s</strong> new guitar. (A nova guitarra <strong class="text-primary">de</strong> James.)
              </li>
              <li>
                Nomes clássicos ou religiosos: adicionar somente <strong class="text-primary">'</strong>. Ex.: Jesus<strong class="text-primary">'</strong> disciples. (Os discípulos <strong class="text-primary">de</strong> Jesus.)
              </li>
            </ol>
          </li>
          <li>Sem substantivos: se o significado for claro, podemos usar o possessivo sem um substantivo depois dele. Ex.: Dora<strong class="text-primary">'s</strong> guitar is older than Carla<strong class="text-primary">'s</strong>. (A guitarra <strong class="text-primary">de</strong> Dora é mais antiga do que a <strong class="text-primary">de</strong> Carla.)</li>
            </ol>
            <p>
              <strong>Atenção:</strong> Se houver dois proprietários de uma única coisa, adicionar <strong class="text-primary">'s</strong> somente ao final do último nome. Ex.:
              <ul>
                <li> 
                  Paul and Lennon<strong class="text-primary">'s</strong> band. (A banda <strong class="text-primary">de</strong> Paul e Lennon. = A banda é dos dois.)
                </li>
              </ul>
                <p>Se cada pessoa possuir coisas distintas, adicionar <strong class="text-primary">'s</strong> em todas as pessoas. Ex.:
                <ul>
                <li>
                  Lennon<strong class="text-primary">'s</strong>, Jagger<strong class="text-primary">'s</strong> and Parypa<strong class="text-primary">'s</strong> bands. (As bandas <strong class="text-primary">de</strong> Lennon, <strong class="text-primary">de</strong> Jagger e <strong class="text-primary">de</strong> Parypa. = Cada um tem uma banda diferente.)
                </li>
              </ul>
                </p>        
        </div>
      </b-card-text>
      
    </b-card>
  </b-container>
</template>

<script>
import Header6 from "./Header6";
export default {
  name: "PossessiveAdj",
  components: {
    Header6,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.rules {
  text-align: left;
}
</style>