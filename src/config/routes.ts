import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/first";
import { Forth } from "../components/welcome/forth";
import { Second } from "../components/welcome/second";
import { Third } from "../components/welcome/third";
import { Index } from "../views";
import { Welcome } from "../views/welcome";

export const routes: RouteRecordRaw[] = [
    { path: "/", component: Welcome },
    {
        path: "/welcome",
        component: Welcome,
        children: [
            { path: "first", component: First },
            { path: "second", component: Second },
            { path: "third", component: Third },
            { path: "forth", component: Forth },
        ],
    },
];
