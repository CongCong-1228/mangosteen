import { defineComponent, reactive } from "vue";
import { NavBar } from "../../../components/navBar";
import left from "@/assets/icons/back.svg";
import "./index.scss";
import { CommonButton } from "@/components/button";
import { EmojiSelect } from "@/components/emojiSelect";

export const TagCreate = defineComponent({
    setup() {
        const reg = new RegExp("/^[\u4e00-\u9fa5]{2,4}$/");
        const onClick = () => {
            console.log("确定");
        };
        const formData = reactive({
            name: "",
            sign: "",
        });
        return () => {
            return (
                <>
                    <NavBar
                        title="新建标签"
                        icon={left}
                        onClick={() => console.log("back")}
                    ></NavBar>
                    <main class="w-full pt-[34px] pb-[60px] px-4">
                        <div class="flex items-start justify-center flex-col">
                            <form action="" class="w-full flex flex-col">
                                <label class="flex flex-col items-start pb-[22px]">
                                    <span class="text-[18px] font-[350] mb-[10px]">
                                        标签名
                                    </span>
                                    <input
                                        v-model={formData.name}
                                        class="tagTitle border-solid border w-full h-[48px] rounded-lg border-[#5C33BE] pl-[16px]"
                                        type="text"
                                        placeholder="2到4个汉字"
                                        maxlength={4}
                                    />
                                </label>
                                <label class="flex flex-col items-start w-full grow">
                                    <span class="mb-[10px]">符号</span>
                                </label>
                                <EmojiSelect />
                                <p class="text-[16px] font-[350] mt-[26px] text-center mb-[30px]">
                                    记账时长按标签，即可进行编辑
                                </p>
                                <CommonButton
                                    title="确定"
                                    clickEvent={onClick}
                                />
                            </form>
                        </div>
                    </main>
                </>
            );
        };
    },
});
