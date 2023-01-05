import { defineComponent, reactive, ref, toRaw } from "vue";
import { NavBar } from "../../../components/navBar";
import left from "@/assets/icons/back.svg";
import "./index.scss";
import { CommonButton } from "@/components/button";
import { EmojiSelect } from "@/components/emojiSelect";
import { Rules, validate } from "@/utils/validate";

export const TagEdit = defineComponent({
    setup() {
        const formData = reactive({
            name: "",
            sign: "",
        });
        const errors = reactive<{ [k in keyof typeof formData]?: string[] }>(
            {}
        );
        const onSubmit = (e: Event) => {
            e.preventDefault();
            const rules: Rules<typeof formData> = [
                { key: "name", type: "required", message: "必填" },
                {
                    key: "name",
                    type: "pattern",
                    regex: /^.{1,4}$/,
                    message: "只能填 1 到 4 个字符",
                },
                { key: "sign", type: "required", message: "必填" },
            ];
            Object.assign(errors, {
                name: undefined,
                sign: undefined,
            });
            Object.assign(errors, validate(formData, rules));
            console.log("errors", toRaw(errors));
            console.log("formData", toRaw(formData));
        };
        return () => {
            return (
                <>
                    <NavBar
                        title="新建标签"
                        icon={left}
                        onClick={() => console.log("back")}
                    ></NavBar>
                    <main class="w-full pt-[34px] pb-[60px] px-4 h-[calc(100vh-80px)] overflow-auto">
                        <div class="flex justify-center flex-col">
                            <form
                                action=""
                                class="w-full flex flex-col"
                                onSubmit={onSubmit}
                            >
                                <label class="flex flex-col items-start pb-[5px]">
                                    <span class="text-[18px] font-[350] mb-[10px]">
                                        标签名
                                    </span>
                                    <input
                                        v-model={formData.name}
                                        class="tagTitle border-solid border w-full h-[48px] rounded-lg border-[#5C33BE] pl-[16px]"
                                        type="text"
                                        placeholder="1-4个字符"
                                    />
                                </label>
                                <div class="text-[red] min-h-[24px] text-[14px]">
                                    {errors["name"] && errors["name"][0]}
                                </div>
                                <label class="flex flex-col items-start w-full grow">
                                    <span class="mb-[10px]">
                                        符号 {formData.sign}
                                    </span>
                                </label>
                                <div class="pb-[6px]">
                                    <EmojiSelect v-model={formData.sign} />
                                </div>
                                <div class="text-[red] min-h-[24px] text-[14px]">
                                    {errors["sign"] && errors["sign"][0]}
                                </div>
                                <p class="text-[16px] font-[350] mt-[10px] text-center mb-[10px]">
                                    记账时长按标签，即可进行编辑
                                </p>
                                <CommonButton
                                    title="确定"
                                    clickEvent={onSubmit}
                                    level="normal"
                                    class="mb-[15px]"
                                />
                            </form>
                            <div class="flex items-center justify-between">
                                <CommonButton
                                    title="删除标签"
                                    clickEvent={() => {
                                        console.log("111");
                                    }}
                                    level="danger"
                                    class="w-[calc(50%-8px)]"
                                />
                                <CommonButton
                                    title="删除标签和记账"
                                    clickEvent={() => {
                                        console.log("111");
                                    }}
                                    level="danger"
                                    class="w-[calc(50%-8px)]"
                                />
                            </div>
                        </div>
                    </main>
                </>
            );
        };
    },
});
