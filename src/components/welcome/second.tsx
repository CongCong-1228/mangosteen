import { defineComponent } from "vue";
import clock from "../../assets/icons/clock.png";
import { WelcomeLayout } from "./welcomeLayout";

export const Second = defineComponent({
    setup() {
        return () => {
            const props = {
                icon: clock,
                title: { title1: "每日提醒", title2: "不会遗漏每一笔账单" },
                buttonLink: "third",
            };
            return <WelcomeLayout {...props} />;
        };
    },
});
