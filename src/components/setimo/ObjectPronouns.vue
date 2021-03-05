<template>
  <b-container>
    <Header7 />
    <b-card class="shadow-lg mb-4">
      <b-card-title>Object Pronouns</b-card-title>
      <b-card-sub-title>Pronomes Objetos</b-card-sub-title>
      <b-card-text class="mt-2 md-w-75 text-center mx-auto">
        <p>
          Os Pronomes Objetos são os <strong>objetos</strong> dos verbos 😁. Isso significa que eles <strong>recebem</strong> a ação do verbo, por isso, aparecem depois do verbo. Simples assim. O equivalente gramatical em português seria o <em>pronome pessoal do caso oblíquo.</em> 
        </p>
        </b-card-text>
        <b-row class="inside-cards">
          <b-col>
            <b-card class="shadow mb-2 cards">
              <b-table class="text-danger" striped hover :items="items">
              </b-table>
            </b-card>
          </b-col>
        </b-row>
        <p>
          Tens que estar afiado com os  <router-link to="/subj">Subject Pronouns</router-link> para os Object Pronouns fazerem mais sentido. Abaixo, alguns exemplos os dois tipos de pronomes:
          <ul>
            <li>
              <strong class="text-primary">I</strong> like Spider-Man. Spider-Man saved <strong class="text-primary">me</strong>.
            </li>
            <li>
              <strong class="text-primary">You</strong> listen to sertanejo... These types of music curse <strong class="text-primary">you</strong>.
            </li>
            <li>
              <strong class="text-primary">He</strong> made a Grateful Dead tattoo. This person tattoed <strong class="text-primary">him</strong>. 
            </li>
            <li>
              <strong class="text-primary">She</strong> is a protester. The cops attacked <strong class="text-primary">her</strong>.
            </li>
            <li>
              <strong class="text-primary">It</strong> destroys the world. So, the people have to get rid of <strong class="text-primary">it</strong> first.
            </li>
            <li>
              <strong class="text-primary">We</strong> have to stop the nazibozo president! This evil creature is killing <strong class="text-primary">us</strong> all!
            </li>
            <li>
              <strong class="text-primary">They</strong> are ruining the country. It is about time to annihilate  <strong class="text-primary">them</strong>.
            </li>
          </ul>
        </p>
      </b-card>
    </b-container>
  </template>

  <script>
  import Header7 from "./Header7";
  export default {
    name: "ObjectPronouns",
    components: {
      Header7,
    },
    data() {
      return {
        items: [
        { Subject: "I", Object: "ME", Translation: "ME/MIM" },
        { Subject: "YOU", Object: "YOU", Translation: "O/A/TE/TI/LHE" },
        { Subject: "HE", Object: "HIM", Translation: "O/LHE" },
        { Subject: "SHE", Object: "HER", Translation: "A/LHE" },
        { Subject: "IT", Object: "IT", Translation: "O/A/LHE/ISSO" },
        { Subject: "WE", Object: "US", Translation: "NOS" },
        { Subject: "YOU", Object: "YOU", Translation: "LHES" },
        { Subject: "THEY", Object: "THEM", Translation: "OS/AS/LHES" },
        ]
      }
    }
  };
  </script>
  <style>
    a:hover {
      background-color: blue;
    }
  </style>