import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home";
import Info from "./components/Info";
import Sexto from "./components/Sexto";

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
      path: "/sexto",
      name: "sexto",
      component: Sexto,
      meta: {
        auth: false,
        title: "6º Ano",
      },
    },
  ],
});
