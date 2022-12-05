import { defineComponent } from "vue";
import cloud from "../../assets/icons/cloud.png";
import { WelcomeLayout } from "./welcomeLayout";

export const Forth = defineComponent({
    setup() {
        return () => {
            const props = {
                icon: cloud,
                title: { title1: "云备份", title2: "再也不怕数据丢失" },
                buttonLink: "/start",
            };
            return <WelcomeLayout {...props} />;
        };
    },
});
