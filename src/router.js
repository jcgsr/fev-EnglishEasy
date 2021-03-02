import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home";
import Info from "./components/Info";
// Sexto
import Be from "./components/sexto/Be";
import SubjectPronouns from "./components/sexto/SubjectPronouns";
import Articles from "./components/sexto/Articles";
import PossessiveAdj from "./components/sexto/PossessiveAdj";
import Numbers from "./components/sexto/Numbers";
import Genitive from "./components/sexto/Genitive";
import Demonstratives from "./components/sexto/Demonstratives";
import ThereBe from "./components/sexto/ThereBe";
import PresentSimple from "./components/sexto/PresentSimple";
import PrepositionPlace from "./components/sexto/PrepositionPlace";
import Plurals from "./components/sexto/Plurals";
import PresentContinuous from "./components/sexto/PresentContinuous";
import Have from "./components/sexto/Have";
import TellingTime from "./components/sexto/TellingTime";
import Ordinal from "./components/sexto/Ordinal";
import Dates from "./components/sexto/Dates";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkExactActiveClass: "link-active",
  routes: [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      auth: false,
      title: "English Easy",
    },
  },
  {
    path: "/info",
    name: "info",
    component: Info,
    meta: {
      auth: false,
      title: "Info",
    },
  },
  {
    path: "/be",
    name: "be",
    component: Be,
    meta: {
      auth: false,
      title: "To Be",
    },
  },
  {
    path: "/subj",
    name: "subj",
    component: SubjectPronouns,
    meta: {
      auth: false,
      title: "SubjectPronoun",
    },
  },
  {
    path: "/articles",
    name: "articles",
    component: Articles,
    meta: {
      auth: false,
      title: "Articles",
    },
  },
  {
    path: "/possessive-adj",
    name: "possessive-adj",
    component: PossessiveAdj,
    meta: {
      auth: false,
      title: "Possessive Adjectives",
    },
  },
  {
    path: "/numbers",
    name: "numbers",
    component: Numbers,
    meta: {
      auth: false,
      title: "Cardinal Numbers",
    },
  },
  {
    path: "/genitive",
    name: "genitive",
    component: Genitive,
    meta: {
      auth: false,
      title: "Genitive Case",
    },
  },
  {
    path: "/demonstratives",
    name: "demonstratives",
    component: Demonstratives,
    meta: {
      auth: false,
      title: "Demonstrative Pronouns",
    },
  },
  {
    path: "/therebe",
    name: "therebe",
    component: ThereBe,
    meta: {
      auth: false,
      title: "There To Be",
    },
  },
  {
    path: "/presentsimple",
    name: "presentsimple",
    component: PresentSimple,
    meta: {
      auth: false,
      title: "Present Simple",
    },
  },
  {
    path: "/prepositionplace",
    name: "prepositionplace",
    component: PrepositionPlace,
    meta: {
      auth: false,
      title: "Preposition of Place",
    },
  },
  {
    path: "/plurals",
    name: "plurals",
    component: Plurals,
    meta: {
      auth: false,
      title: "Plurals",
    },
  },
  {
    path: "/presentcontinuous",
    name: "presentcontinuous",
    component: PresentContinuous,
    meta: {
      auth: false,
      title: "Present Continuous",
    },
  },
  {
    path: "/have",
    name: "have",
    component: Have,
    meta: {
      auth: false,
      title: "To Have",
    },
  },
  {
    path: "/tellingtime",
    name: "tellingtime",
    component: TellingTime,
    meta: {
      auth: false,
      title: "Telling Time",
    },
  },
  {
    path: "/ordinal",
    name: "ordinal",
    component: Ordinal,
    meta: {
      auth: false,
      title: "Ordinal Numbers",
    },
  },
   {
    path: "/dates",
    name: "dates",
    component: Dates,
    meta: {
      auth: false,
      title: "Dates",
    },
  },

  ],
});
