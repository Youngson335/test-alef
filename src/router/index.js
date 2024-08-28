import { createRouter, createWebHashHistory } from "vue-router";
import FormPage from "../pages/FormPage.vue";
import PreviewPage from "../pages/PreviewPage.vue";

const routes = [
  {
    path: "/",
    name: "form",
    component: FormPage,
  },
  {
    path: "/preview",
    name: "preview",
    component: PreviewPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
