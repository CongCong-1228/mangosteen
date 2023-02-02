import { NavBar } from "@/components/navBar";
import { defineComponent, reactive, ref } from "vue";
import menu from "@/assets/icons/menu.svg";
import { Tab, Tabs } from "@/components/tabs";
import { ItemSummary } from "../itemSummary";
import { Time } from "@/utils/time";
import { Overlay } from "vant";
import { Form, FormItem } from "@/components/form";

export const ItemList = defineComponent({
    setup() {
        const onClick = () => {
            console.log("itemList");
        };
        const selected = ref("本月");
        const isShowOverLay = ref(false);
        const onSelectedChange = (name: string) => {
            selected.value = name;
            if (name === "自定义时间") {
                isShowOverLay.value = true;
            }
        };
        const time = new Time();
        const customTime = reactive({
            start: new Time(),
            end: new Time(),
        });
        const timeList = [
            {
                name: "本月",
                start: time.firstDayOfMonth(),
                end: time.lastDayOfMonth(),
            },
            {
                name: "上个月",
                start: time.add(-1, "month").firstDayOfMonth(),
                end: time.add(-1, "month").lastDayOfMonth(),
            },
            {
                name: "今年",
                start: time.firstDayOfYear(),
                end: time.lastDayOfYear(),
            },
        ];
        return () => {
            return (
                <>
                    <NavBar title="山竹记账" icon={menu} onClick={onClick} />
                    <main>
                        <Tabs
                            selected={selected.value}
                            onSelectedChange={onSelectedChange}
                        >
                            <Tab name="本月">
                                <ItemSummary
                                    startDate={timeList[0].start.format()}
                                    endDate={timeList[0].end.format()}
                                />
                            </Tab>
                            <Tab name="上个月">
                                <ItemSummary
                                    startDate={timeList[1].start.format()}
                                    endDate={timeList[1].end.format()}
                                />
                            </Tab>
                            <Tab name="今年">
                                <ItemSummary
                                    startDate={timeList[2].start.format()}
                                    endDate={timeList[2].start.format()}
                                />
                            </Tab>
                            <Tab name="自定义时间">
                                <Overlay
                                    show={isShowOverLay.value}
                                    class="flex items-center justify-center"
                                >
                                    <div class="w-4/5 h-[35%] border overflow-hidden flex flex-column flex-wrap flex-col">
                                        <div class="h-14 w-full bg-[#5C33BE] text-left pl-4 flex items-center text-[#fff] text-[18px]">
                                            请选择时间
                                        </div>
                                        <div class="bg-[#fff] w-full grow">
                                            <label class="flex flex-col items-start pb-[5px] pl-[16px] mt-[10px]">
                                                <span class="text-[18px] font-[350] mb-[10px]">
                                                    标签名
                                                </span>
                                                <input
                                                    // v-model={formData.name}
                                                    class="tagTitle border-solid border w-[85%] h-[48px] rounded-lg border-[#5C33BE] pl-[16px]"
                                                    type="text"
                                                    placeholder="1-4个字符"
                                                />
                                            </label>
                                            <label class="flex flex-col items-start pb-[5px] pl-[16px] mt-[10px]">
                                                <span class="text-[18px] font-[350] mb-[10px]">
                                                    标签名
                                                </span>
                                                <input
                                                    // v-model={formData.name}
                                                    class="tagTitle border-solid border w-[85%] h-[48px] rounded-lg border-[#5C33BE] pl-[16px]"
                                                    type="text"
                                                    placeholder="1-4个字符"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </Overlay>
                            </Tab>
                        </Tabs>
                    </main>
                </>
            );
        };
    },
});
