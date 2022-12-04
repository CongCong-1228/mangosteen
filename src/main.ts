import { createApp } from "vue";
import { App } from "./App";
import "./index.scss";
import { createRouter } from "vue-router";
import { routes } from "./config/routes";
import { history } from "./utils/history";

const router = createRouter({
    history,
    routes, // short for `routes: routes`
});

const app = createApp(App);
app.use(router);
app.mount("#app");
