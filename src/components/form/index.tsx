import { PropType, computed, defineComponent, ref } from "vue";
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

// v-model 怎么使用

// 首先父组件传值  <FormItem v-model = 'aa'></FormItem>

// 子组件接收两个  props: modelValue   emit: ["update:modelValue"]

// 子组件需要的地方使用

// <Input  v-model = props.modelValue onChange = () => context.emit("update:modelValue", e.target.value)/>

export const FormItem = defineComponent({
  props: {
    type: {
      type: String as PropType<"loginCode" | "text" | "select">,
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
    options: {
      type: Array as PropType<Array<{ value: string; text: string }>>,
    },
    countFrom: {
      type: Number as PropType<number>,
      default: 60,
    },
    onClick: {
      type: Function as PropType<() => void>,
    },
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const timer = ref<number>();
    const count = ref<number>(props.countFrom);
    // !!双重否定会转换成boolean值
    const isCounting = computed(() => !!timer.value);
    const onClickLoginCode = () => {
      props.onClick?.();
      timer.value = window.setInterval(() => {
        count.value -= 1;
        if (count.value === 0) {
          clearInterval(timer.value);
          timer.value = undefined;
          count.value = props.countFrom;
        }
      }, 1000);
    };
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
                context.emit("update:modelValue", e.target.value)
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
                  context.emit("update:modelValue", e.target.value)
                }
              />
              <CommonButton
                title={
                  isCounting.value ? `${count.value}后可重新发送` : "发送验证码"
                }
                disabled={isCounting.value}
                type="button"
                clickEvent={onClickLoginCode}
              ></CommonButton>
            </div>
          );
        case "select":
          return (
            <select
              class="w-32 h-8 ml-[20px] pl-4 py-1 pr-2 border border-[#707070] border-solid rounded-lg"
              onChange={(e: any) => {
                context.emit("update:modelValue", e.target.value);
              }}
            >
              {props.options?.map((option) => (
                <option value={option.value}>{option.text}</option>
              ))}
            </select>
          );
        default:
          return context.slots.default?.();
      }
    });
    return () => {
      return (
        <>
          <label
            class={
              props.type === "select"
                ? "flex items-center justify-start flex-wrap pb-[5px]"
                : "flex flex-col items-start pb-[5px]"
            }
          >
            <span
              class={`text-[18px] font-[350] ${
                props.type !== "select" ? "mb-[10px]" : ""
              }`}
            >
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
