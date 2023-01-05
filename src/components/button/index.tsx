import { defineComponent, PropType, toRefs } from "vue";
import "./index.scss";

export const CommonButton = defineComponent({
    props: {
        title: {
            type: String as PropType<string>,
            required: true,
        },
        clickEvent: {
            // 前面是js类型，后面是ts类型
            type: Function as PropType<(payload: MouseEvent) => void>,
            required: true,
        },
        level: {
            type: String as PropType<"normal" | "danger" | "success">,
        },
    },
    setup(props) {
        // 将props的数据转换成响应式的ref，调用时要用.value
        const { title, clickEvent } = toRefs(props);
        return () => {
            return (
                <div class={`w-full`}>
                    <button
                        class={[
                            "rounded-lg text-[18px] text-[#fff] font-[350] h-12 w-full cursor-pointer",
                            props.level,
                        ]}
                        onClick={clickEvent.value}
                    >
                        {title.value}
                    </button>
                </div>
            );
        };
    },
});
