import { defineComponent, PropType } from "vue";

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
            const children = context.slots.default?.();
            if (!children) {
                return () => null;
            }
            // slot的type表示slot类型是Tab还是div
            for (let i = 0; i < children.length; i++) {
                if (children[i].type !== Tab)
                    throw new Error("Tabs's children must Tab");
            }
            return (
                <nav>
                    <ol class="flex justify-center items-center">
                        {children.map((item) => {
                            return (
                                <li
                                    class={`grow shrink-0 flex justify-center items-center ${
                                        props.selected === item.props?.name
                                            ? "bg-[red]"
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
                    <div>
                        {children.find(
                            (item) => item.props?.name === props.selected
                        )}
                    </div>
                </nav>
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
            return <>{context.slots.default?.()}</>;
        };
    },
});
