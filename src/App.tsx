import { defineComponent, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

export const App = defineComponent({
    setup() {
        const count = ref(0);
        const onClick = () => {
            count.value += 1;
        };
        return () => (
            <>
                <RouterView />
            </>
        );
    },
});
