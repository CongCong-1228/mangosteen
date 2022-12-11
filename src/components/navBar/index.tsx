import { defineComponent, PropType } from "vue";
import menu from "../../assets/icons/menu.svg";
export const NavBar = defineComponent({
    props: {
        onClick: {
            type: Function as PropType<(e: MouseEvent) => void>,
        },
    },
    setup(props) {
        return () => {
            return (
                <nav class="flex items-center justify-start pl-6 pt-[50px] pb-4 bg-gradient-to-b from-[#6336c2] to-[#8f4cd7]">
                    <img
                        src={menu}
                        alt=""
                        class="mr-5"
                        onClick={props.onClick}
                    />
                    <span class="font-[350] text-[#fff] text-lg">山竹记账</span>
                </nav>
            );
        };
    },
});
