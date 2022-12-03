import { defineComponent, ref } from "vue";

export const App = defineComponent({
    setup() {
        const count = ref(0);
        const onClick = () => {
            count.value += 1;
        };
        return () => (
            <>
                <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                    {count.value}
                </div>
                <button onClick={onClick}>+1</button>
            </>
        );
    },
});
