import { defineComponent } from "vue";
import { ItemCreate } from "./itemCreate";

export const ItemPage = defineComponent({
    setup() {
        return () => {
            return (
                <>
                    <ItemCreate />
                </>
            );
        };
    },
});
