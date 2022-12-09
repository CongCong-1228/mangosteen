import { defineComponent, PropType, toRefs } from "vue";

export const CommonButton = defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
        clickEvent: {
            type: Function as PropType<(payload: MouseEvent) => void>,
            required: true,
        },
    },
    setup(props) {
        // 将props的数据转换成响应式的ref，调用时要用.value
        const { title, clickEvent } = toRefs(props);
        return () => {
            return (
                <div class={` w-full p-4`}>
                    <button
                        class="rounded-lg bg-[#5C33BE] text-[18px] text-[#fff] font-[350] h-12 w-full cursor-pointer"
                        onClick={clickEvent.value}
                    >
                        {title.value}
                    </button>
                </div>
            );
        };
    },
});
