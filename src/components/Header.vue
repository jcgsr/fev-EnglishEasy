<template>
  <div class="shadow">
    <b-navbar toggleable="lg" type="dark" variant="danger">
      <router-link to="/">
        <b-navbar-brand>English?! Easy...</b-navbar-brand>
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- Right aligned nav items -->
      <!-- Sexto -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="6º" right>
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
          </b-nav-item-dropdown>
          <!-- Fim Sexto -->

          <!-- Sétimo -->
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown text="7º" right>
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
                  <router-link to="/pastcontinuous"
                  >Past Continuous</router-link
                  >
                </b-dropdown-item>
              </b-nav-item-dropdown>
              <!-- Fim do Sétimo -->

              <!-- Oitavo -->
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                  <b-nav-item-dropdown text="8º" right>
                    <b-dropdown-item>
                      <router-link to="/comparative"
                      >Adjectives (Comparative)</router-link
                      >
                    </b-dropdown-item>
                    <b-dropdown-item>
                      <router-link to="/relativepronouns"
                      >Relative Pronouns</router-link
                      >
                    </b-dropdown-item>
                    <b-dropdown-item>
                      <router-link to="/superlative"
                      >Adjectives (Superlative)</router-link
                      >
                    </b-dropdown-item>
                    <b-dropdown-item>
                      <router-link to="/begoingto"
                      >Future (Be Going to)</router-link
                      >
                    </b-dropdown-item>
                    <b-dropdown-item>
                      <router-link to="/will">Future (Will)</router-link>
                    </b-dropdown-item>
                    <b-dropdown-item>
                      <router-link to="/prefixsufix"
                      >Prefix & Sufix</router-link
                      >
                    </b-dropdown-item>
                    <b-dropdown-item>
                      <router-link to="/quantifiers"
                      >Quantifiers</router-link
                      >
                    </b-dropdown-item>
                    <b-dropdown-item>
                      <router-link to="/countable"
                      >Countable and Uncountable Nouns</router-link
                      >
                    </b-dropdown-item>
                    <b-dropdown-item>
                      <router-link to="/usedto">Used to</router-link>
                    </b-dropdown-item>
                  </b-nav-item-dropdown>
                  <!-- Fim do Oitavo -->

                  <!-- Nono -->
                  <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                      <b-nav-item-dropdown text="9º" right>
                        <b-dropdown-item>
                          <router-link to="/modals"
                          >Modal Verbs</router-link
                          >
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <router-link to="/conditionals"
                          >Conditionals</router-link
                          >
                        </b-dropdown-item>
                      </b-nav-item-dropdown>
                    </b-navbar-nav>
                  </b-collapse>
                      </b-navbar-nav>
                    </b-collapse>
                  </b-navbar-nav>
                </b-collapse>
                <b-nav-item right>
                  <!-- Using 'button-content' slot -->

                  <template>
                    <router-link to="/info">
                      <em> <i class="fas fa-info"></i></em>
                    </router-link>
                  </template>
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </template>

      <script>
        export default {
          name: "Header",
        };
      </script>
      <style>
      i {
        color: white;
        font-size: 1.5rem;
      }
      .bg-danger {
        background-color: rgb(241, 11, 11);
      }
      .navbar-dark .navbar-nav .nav-link {
        color: white;
        font-size: 1.5rem;
      }
    </style>
