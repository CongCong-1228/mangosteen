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
    build: {},
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
    // 解决
    resolve: {
        // 别名
        alias: {
            "@": resolve(__dirname, "./src"),
        },
        // 扩展名
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
});
