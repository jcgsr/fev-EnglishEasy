<template>
  <b-container class="container">
    <h1>English Easy</h1>
    <b-row>
      <b-col md="3">
        <b-dropdown
          text="6º Ano"
          variant="danger"
          class="m-md-4 mb-2 shadow"
          size="lg"
        >
          <b-dropdown-item>
            <router-link to="/subj">Subject Pronouns</router-link>
          </b-dropdown-item>

          <b-dropdown-item>
            <router-link to="/be">To Be</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/articles">Articles</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/possessive-adj"
              >Possessive Adjectives</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/numbers">Cardinal Numbers</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/genitive">Genitive Case</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/demonstratives"
              >Demonstrative Pronouns</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/therebe">There To Be</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/presentsimple">Present Simple</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/prepositionplace"
              >Preposition of Place</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/plurals">Plurals</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/presentcontinuous"
              >Present Continuous</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/have">To Have</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/tellingtime">Telling Time</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/ordinal">Ordinal Numbers</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/dates">Dates</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/advfrequency">Adverbs of Frequency</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/imperative">Imperative</router-link>
          </b-dropdown-item>
        </b-dropdown>
      </b-col>
      <!-- Sétimo -->
      <b-col md="3">
        <b-dropdown
          text="7º Ano"
          variant="danger"
          class="m-md-4 mb-2 shadow"
          size="lg"
        >
          <b-dropdown-item>
            <router-link to="/pastsimple">Past Simple</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/objpronouns">Object Pronouns</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/prepositiontime"
              >Prepositions of Time</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/can">Can</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/could">Could</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/linkingwords">Linking Words</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/bepast">To Be (Past)</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/pastcontinuous">Past Continuous</router-link>
          </b-dropdown-item>
        </b-dropdown>
      </b-col>
      <!-- Fim Sétimo -->
      <!-- Oitavo -->
      <b-col md="3">
        <b-dropdown
          text="8º Ano"
          variant="danger"
          class="m-md-4 mb-2 shadow"
          size="lg"
        >
          <b-dropdown-item>
            <router-link to="/comparative"
              >Adjectives (Comparative)</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/relativepronouns">Relative Pronouns</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/superlative"
              >Adjectives (Superlative)</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/begoingto">Future (Be Going to)</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/will">Future (Will)</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/prefixsufix">Prefix & Sufix</router-link>
          </b-dropdown-item>
           <b-dropdown-item>
            <router-link to="/quantifiers">Quantifiers</router-link>
          </b-dropdown-item>
           <b-dropdown-item>
            <router-link to="/countable">Countable and Uncountable Nouns</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/usedto">Used to</router-link>
          </b-dropdown-item>
        </b-dropdown>
      </b-col>
      <b-col md="3">
        <b-dropdown
          text="9º Ano"
          variant="danger"
          class="m-md-4 shadow"
          size="lg"
        >
          <b-dropdown-item>
            <router-link to="/be">To Be</router-link>
          </b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <KinesisContainer>
      <KinesisElement :strength="40" type="depth">
        <a :href="linkBrE" title="Pexels - BrE Bandeira">
          <img
            class="brE mt-4 mb-4"
            src="../assets/brEflag.jpg"
            alt="Bandeira Inglesa"
          />
        </a>
      </KinesisElement>
    </KinesisContainer>

<!--     <KinesisContainer>
      <KinesisElement :strength="20" type="depth">
        <a href="linkAmE" title="Pexels - AmE Bandeira">
          <img class="amE mb-4" src="../assets/ameFlag.jpg" alt="" />
        </a>
      </KinesisElement>
    </KinesisContainer>
 -->  </b-container>
</template>

<script>
import {
  KinesisContainer,
  KinesisElement,
} from "../../node_modules/vue-kinesis/";
export default {
  name: "Home",
  components: { KinesisContainer, KinesisElement },
  data() {
    return {
      linkBrE:
        "https://pixabay.com/pt/illustrations/bandeira-do-reino-unido-union-jack-1443709/",
      linkAmE:
        "https://pixabay.com/pt/illustrations/grunge-desbotada-usado-pavilh%C3%A3o-1081668/",
    };
  },
};
</script>
<style>
h1 {
  text-align: center;
  padding: 1rem;
}
.btn-danger {
  background-color: rgb(241, 11, 11);
}
.btn-danger:hover {
  background-color: blue !important;
  border: none;
}
.container {
  text-align: center;
  background-image: url(../assets/ameFlag.jpg);
  padding: 2rem;
  margin-bottom: 2rem;
 /* background-repeat: repeat-x;
  background-position: 
    0 20%,
    0 100%,
    0 50%,
    0 100%,
    0 0;
  background-size: 
    2500px,
    800px,
    500px 200px,
    1000px,
    400px 260px;
  animation: 100s para infinite linear;*/
}
/*@keyframes para {
  100% {
    background-position: 
      -5000px 20%,
      -800px 95%,
      500px 50%,
      1000px 100%,
      400px 0;
    }
  }*/
.dropdown-menu > li > a:hover {
  background-color: red;
}
a:hover {
  color: white !important;
}

.dropdown:hover .dropdown-menu {
  display: block;
  opacity: 0.97;
}
</style>
