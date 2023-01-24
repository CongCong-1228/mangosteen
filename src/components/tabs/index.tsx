import { defineComponent, Fragment, PropType } from "vue";

export const Tabs = defineComponent({
    props: {
        selected: {
            type: String as PropType<string>,
            required: true,
        },
        onSelectedChange: {
            type: Function as PropType<(name: string) => void>,
            required: true,
        },
    },
    setup(props, context) {
        return () => {
            const tabs = context.slots.default?.();
            console.log("tabs", tabs);
            if (!tabs) {
                return () => null;
            }
            // slot的type表示slot类型是Tab还是div
            for (let i = 0; i < tabs.length; i++) {
                if (tabs[i].type !== Tab)
                    throw new Error("Tabs's children must Tab");
            }
            return (
                <>
                    <nav class="bg-[#8f4cd7] pt-5">
                        <ol class="flex justify-center items-center ">
                            {tabs?.map((item) => {
                                return (
                                    // 选中情况下加了伪元素
                                    <li
                                        class={`grow shrink-0 flex justify-center items-center text-[#fff] relative pb-[12px] ${
                                            props.selected === item.props?.name
                                                ? "after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-[4px] after:bg-[#C8B1FF] after:block after:absolute"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            props.onSelectedChange?.(
                                                item.props?.name
                                            )
                                        }
                                    >
                                        {item.props?.name}
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>
                    {tabs?.find((item) => item.props?.name === props.selected)}
                </>
            );
        };
    },
});

export const Tab = defineComponent({
    props: {
        name: {
            type: String as PropType<string>,
            required: true,
        },
    },
    setup(props, context) {
        return () => {
            // 返回插槽
            return (
                <div class="flex justify-start grow flex-wrap overflow-auto">
                    {context.slots.default?.()}
                </div>
            );
        };
    },
});
