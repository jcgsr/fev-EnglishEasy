<template>
  <b-container>
    <Header6 />
    <b-card class="shadow-lg">
      <b-card-title>Plurals</b-card-title>
      <b-card-sub-title>Plurais</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <div class="rules">
          <p>
           <ul>
            <li>Regra Geral: Basta adicionar <strong class="text-primary">
            s</strong> ao substantivo.
          </li>        

          <table class="mt-4 mb-4">
            <tbody>
              <tr>
                <th>Singular</th>
                <th>Plural</th>
              </tr>
              <tr>
                <td>guitar</td>
                <td>guitar<strong class="text-primary">s</strong></td>
              </tr>
              <tr>
                <td>violin</td>
                <td>violin<strong class="text-primary">s</strong></td>
              </tr>
            </tbody>
          </table>
          <li>Casos especiais:
            <ul type="square">
              <li>Se o substantivo terminar com <strong class="text-primary">s, ss, sh, ch, x, o:</strong> deve-se adicionar <strong class="text-primary">es</strong></li>
              <table class="mt-4 mb-4">
                <tbody>
                  <tr>
                    <th>Singular</th>
                    <th>Plural</th>
                  </tr>
                  <tr>
                    <td>ga<strong class="text-primary">s</strong></td>
                    <td>gas<strong class="text-primary">es</strong></td>
                  </tr>
                  <tr>
                    <td>cla<strong class="text-primary">ss</strong></td>
                    <td>class<strong class="text-primary">es</strong></td>
                  </tr>  
                  <tr>
                    <td>wi<strong class="text-primary">sh</strong></td>
                    <td>wish<strong class="text-primary">es</strong></td>
                  </tr>  
                  <tr>
                    <td>wat<strong class="text-primary">ch</strong></td>
                    <td>watch<strong class="text-primary">es</strong></td>
                  </tr>  
                  <tr>
                    <td>bo<strong class="text-primary">x</strong></td>
                    <td>box<strong class="text-primary">es</strong></td>
                  </tr>  
                  <tr>
                    <td>potat<strong class="text-primary">o</strong></td>
                    <td>potato<strong class="text-primary">es</strong></td>
                  </tr>
                </tbody>
              </table>
              <li>Se o substantivo terminar com <em class="text-primary">consoante</em> + <strong class="text-primary">y</strong>, retira-se o <strong>y</strong> coloca-se <strong class="text-primary">ies</strong>.</li>
              <table class="mt-4 mb-4">
                <tbody>
                  <tr>
                    <th>Singular</th>
                    <th>Plural</th>
                  </tr>
                  <tr>
                    <td>lad<strong class="text-primary">y</strong></td>
                    <td>lad<strong class="text-primary">ies</strong></td>
                  </tr>
                  <tr>
                    <td>countr<strong class="text-primary">y</strong></td>
                    <td>countr<strong class="text-primary">ies</strong></td>
                  </tr>                 
                </tbody>
              </table>
              <li>Se o substantivo terminar com <strong class="text-primary">f</strong> ou <strong class="text-primary">fe</strong>, retira-se <strong>f/fe</strong> e coloca-se <strong class="text-primary">ves</strong>.</li>
              <table class="mt-4 mb-4">
                <tbody>
                  <tr>
                    <th>Singular</th>
                    <th>Plural</th>
                  </tr>
                  <tr>
                    <td>wol<strong class="text-primary">f</strong></td>
                    <td>wol<strong class="text-primary">ves</strong></td>
                  </tr>
                </tbody>
              </table>
            </ul>
          </li>
          <li>Irregulares (mais usados)</li> 
          <table class="mt-4 mb-4">
            <tbody>
              <tr>
                <th>Singular</th>
                <th>Plural</th>
              </tr>
              <tr>
                <td>man</td>
                <td><strong class="text-primary">men</strong></td>
              </tr>
              <tr>
                <td>woman</td>
                <td><strong class="text-primary">women</strong></td>
              </tr>  <tr>
                <td>child</td>
                <td><strong class="text-primary">children</strong></td>
              </tr>  <tr>
                <td>person</td>
                <td><strong class="text-primary">people</strong></td>
              </tr>  
              <tr>
                <td>foot</td>
                <td><strong class="text-primary">feet</strong></td>
              </tr>
              <tr>
                <td>tooth</td>
                <td><strong class="text-primary">teeth</strong></td>
              </tr>
            </tbody>
          </table>  
          <ul>
            <li>Nunca mudam no plural (mais usados)</li>
            <ol>
              <li>sheep</li>
              <li>fish</li>
              <li>deer</li>
              <li>swine</li>
              <li>buffalo</li>
              <li>shrimp</li>
              <li>aircraft</li>
              <li>spacecraft</li>
            </ol>
          </ul>        
          <p>
            Obs.: Quer saber o que significa cada um desses substantivos?  Vai no <a :href="link">Google Translator</a>, preguiça! &#128513;
          </p>
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
  name: "Plurals",
  components: {
    Header6,
  },
  data() {
    return {
      link: "https://translate.google.com.br/?hl=pt-BR&sl=en&tl=pt&op=translate"
    };
  },
};
</script>
<style scoped>
.rules {
  text-align: center;
}
td,
th,
tr {
  border: 1px solid red;
  padding: 1rem;
}
table {
  margin: 0 auto;
}
a {
  color: white;
  background-color: red;
  padding: .2rem;
}
</style>