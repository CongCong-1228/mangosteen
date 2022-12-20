import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    // base: "/mangosteen/dist/"
    base: "/",
    plugins: [
        vue(),
        vueJsx({
            transformOn: true,
            mergeProps: true,
        }),
        Components({
            resolvers: [VantResolver()],
        }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
});
