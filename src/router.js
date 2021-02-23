import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home";
import Info from "./components/Info";
import Be from "./components/sexto/Be";

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
  ],
});
