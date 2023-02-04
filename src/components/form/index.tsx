import { PropType, computed, defineComponent } from "vue";
import { CommonButton } from "../button";

export const Form = defineComponent({
    props: {
        onSubmit: {
            type: Function as PropType<(e: Event) => void>,
        },
    },
    setup(props, context) {
        return () => {
            return (
                <form onSubmit={props.onSubmit} class="p-4">
                    {context.slots.default?.()}
                </form>
            );
        };
    },
});

export const FormItem = defineComponent({
    props: {
        type: {
            type: String as PropType<"loginCode" | "text">,
            required: true,
        },
        label: {
            type: String as PropType<string>,
            required: true,
        },
        error: {
            type: String as PropType<string>,
        },
        modelValue: {
            type: [String, Number],
        },
        placeholder: {
            type: String,
        },
    },
    emits: ["update:modelValue"],
    setup(props, context) {
        const content = computed(() => {
            switch (props.type) {
                case "text":
                    return (
                        <input
                            value={props.modelValue}
                            class="tagTitle border-solid border w-full h-[48px] rounded-lg border-[#5C33BE] pl-[16px]"
                            type="text"
                            placeholder={props.placeholder}
                            onInput={(e: any) =>
                                context.emit(
                                    "update:modelValue",
                                    e.target.value
                                )
                            }
                        />
                    );
                case "loginCode":
                    return (
                        <div class="flex w-full ">
                            <input
                                value={props.modelValue}
                                class="border-solid border w-[45%] h-[48px] rounded-lg border-[#5C33BE] pl-4 mr-4"
                                type="text"
                                placeholder={props.placeholder}
                                onInput={(e: any) =>
                                    context.emit(
                                        "update:modelValue",
                                        e.target.value
                                    )
                                }
                            />
                            <CommonButton
                                title={"发送验证码"}
                                clickEvent={() => console.log("发送验证码")}
                            ></CommonButton>
                        </div>
                    );
                default:
                    return context.slots.default?.();
            }
        });
        return () => {
            return (
                <>
                    <label class="flex flex-col items-start pb-[5px]">
                        <span class="text-[18px] font-[350] mb-[10px]">
                            {props.label}
                        </span>
                        {content.value}
                    </label>
                    <div class="text-[red] min-h-[24px] text-[14px]">
                        {props.error ?? " "}
                    </div>
                </>
            );
        };
    },
});
