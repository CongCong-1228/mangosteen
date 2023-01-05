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
import { TagPage } from "../views/tag";
import { TagCreate } from "../views/tag/tagCreate";
import { TagList } from "../views/tag/tagList";
import { TagEdit } from "@/views/tag/tagEdit";

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
    {
        path: "/tag",
        component: TagPage,
        children: [
            {
                path: "create",
                component: TagCreate,
            },
            {
                path: "",
                component: TagList,
            },
            {
                path: ":id/edit",
                component: TagEdit,
            },
        ],
    },
];
