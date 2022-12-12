import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/first";
import { Forth } from "../components/welcome/forth";
import { Second } from "../components/welcome/second";
import { Third } from "../components/welcome/third";
import { Welcome } from "../views/welcome";
import { Start } from "../views/start";
import { ItemPage } from "../views/item";
import { ItemCreate } from "../views/item/itemCreate";
import { ItemList } from "../views/item/itemList";

export const routes: RouteRecordRaw[] = [
    { path: "/", redirect: "/welcome/first" },
    {
        path: "/welcome/",
        redirect: "/welcome/first",
        component: Welcome,
        children: [
            { path: "first", component: First },
            { path: "second", component: Second },
            { path: "third", component: Third },
            { path: "forth", component: Forth },
        ],
    },
    { path: "/start", component: Start },
    {
        path: "/item",
        component: ItemPage,
        children: [
            { path: "create", component: ItemCreate },
            { path: "", component: ItemList },
        ],
    },
];
