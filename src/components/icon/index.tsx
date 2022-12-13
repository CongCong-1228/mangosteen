import { defineComponent, PropType } from "vue";

export const Icon = defineComponent({
    props: {
        onClick: {
            type: Function as PropType<() => void>,
        },
        name: {
            type: String as PropType<string>,
            required: true,
        },
    },
    setup(props) {
        return () => {
            return (
                <svg onClick={props.onClick}>
                    <use xlinkHref={"#" + props.name}></use>
                </svg>
            );
        };
    },
});
