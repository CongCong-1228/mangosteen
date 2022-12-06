import { onMounted, Ref } from "vue";

export const useSwipe = (element: Ref<HTMLElement | null>) => {
    onMounted(() => {
        console.log("element", element.value);
        element.value?.addEventListener("touchstart", (e) => {
            console.log("start");
        });
        element.value?.addEventListener("touchmove", (e) => {
            console.log("move");
        });
        element.value?.addEventListener("touchend", (e) => {
            console.log("end");
        });
    });
};
