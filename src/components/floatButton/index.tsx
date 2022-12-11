import { defineComponent } from "vue";
import addIcon from "../../assets/icons/add.svg";

export const FloatButton = defineComponent({
    setup() {
        return () => {
            return (
                <button class="h-14 w-14 rounded-full flex justify-center items-center bg-[#5C33BE] absolute right-4 bottom-4">
                    <img src={addIcon} alt="" />
                </button>
            );
        };
    },
});
