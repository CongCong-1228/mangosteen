import { defineComponent, PropType } from "vue";
export const NavBar = defineComponent({
    props: {
        title: {
            type: String as PropType<string>,
            required: true,
        },
        icon: {
            type: String as PropType<string>,
        },
        onClick: {
            type: Function as PropType<(e: MouseEvent) => void>,
        },
    },
    setup(props) {
        return () => {
            return (
                <nav class="flex items-center justify-start pl-6 pt-[50px] pb-4 bg-gradient-to-b from-[#6336c2] to-[#8f4cd7]">
                    <img
                        src={props.icon}
                        alt=""
                        class="mr-5"
                        onClick={props.onClick}
                    />
                    <span class="font-[350] text-[#fff] text-lg">
                        {props.title}
                    </span>
                </nav>
            );
        };
    },
});
