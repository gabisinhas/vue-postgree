import nProgress from "nprogress";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Create New Employee",
    component: () => import("../components/create-employee/CreateEmployee.vue"),
  },
  {
    path: "/list-employees",
    name: "List Employees",
    component: () => import("../components/list-employee/ListEmployee.vue"),
  },
  {
    path: "/edit-employee/:id",
    name: "Update Employee",
    component: () => import("../components/edit-employee/EditEmployee.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeResolve((to, from, next) => {
  // Quando houver carregamento de uma pagina inicial, carrega o Nprogress
  if (to.name) {
    nProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Completa a animação usando o progress bar
  nProgress.done();
});

export default router;
