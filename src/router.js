import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home";
import Info from "./components/Info";
import Be from "./components/sexto/Be";
import SubjectPronouns from "./components/sexto/SubjectPronouns";
import Articles from "./components/sexto/Articles";
import PossessiveAdj from "./components/sexto/PossessiveAdj";
import Numbers from "./components/sexto/Numbers";

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
        title: "Ordinal Numbers",
      },
    },
  ],
});
