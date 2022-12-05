import { defineComponent } from "vue";
import chart from "../../assets/icons/chart.png";
import { WelcomeLayout } from "./welcomeLayout";
export const Third = defineComponent({
    setup() {
        return () => {
            const props = {
                icon: chart,
                title: { title1: "数据可视化", title2: "收支一目了然" },
                buttonLink: "forth",
            };
            return <WelcomeLayout {...props} />;
        };
    },
});
