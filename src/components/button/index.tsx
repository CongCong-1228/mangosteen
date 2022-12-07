import { defineComponent } from "vue";

export const CommonButton = defineComponent({
    props: {
        title: String,
        clickEvent: Function,
    },

    setup(props) {
        const { title, clickEvent } = props;

        const onClick = () => {
            if (clickEvent) {
                clickEvent();
            }
        };
        return () => {
            return (
                <div
                    class="flex items-center justify-center rounded-lg bg-[#5C33BE] text-[18px] text-[#fff] font-[350] h-12 w-[90%] cursor-pointer"
                    onClick={onClick}
                >
                    <span>{title}</span>
                </div>
            );
        };
    },
});
