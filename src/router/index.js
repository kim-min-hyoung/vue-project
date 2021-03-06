import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/library",
    name: "library",
    component: () => import("../views/Library.vue"),
  },
  {
    path: "/tracks",
    name: "tracks",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Tracks.vue"),
  },
  {
    path: "/artists",
    name: "artists",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Artists.vue"),
  },
  {
    path: "/albums",
    name: "albums",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Albums.vue"),
  },
  {
    path: "/playlists",
    name: "playlists",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Playlists.vue"),
  },
  {
    path: "/mp3",
    name: "mp3",
    component: () => import(/* webpackChunkName: "about" */ "../views/Mp3.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
