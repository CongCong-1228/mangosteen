import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import bank from "../../assets/icons/bank.png";
import { WelcomeLayout } from "./welcomeLayout";
export const First = defineComponent({
    setup() {
        return () => {
            const props = {
                icon: bank,
                title: { title1: "会挣钱", title2: "还要会省钱" },
                buttonLink: "second",
            };
            return <WelcomeLayout {...props} />;
        };
    },
});
