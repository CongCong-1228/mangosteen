import { PropType, defineComponent } from "vue";

export const ItemSummary = defineComponent({
    props: {
        startDate: {
            type: String as PropType<string>,
            required: true,
        },
        endDate: {
            type: String as PropType<string>,
            required: true,
        },
    },
    setup(props) {
        return () => {
            return <>{props.startDate}</>;
        };
    },
});
