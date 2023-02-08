import { NavBar } from "@/components/navBar";
import { PropType, defineComponent, reactive, ref } from "vue";
import menu from "@/assets/icons/menu.svg";
import { Tab, Tabs } from "@/components/tabs";
import { Time } from "@/utils/time";
import { Overlay } from "vant";
import { OverLay } from "@/components/overLay";

const demo = defineComponent({
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
});

export const TimeTabsLayout = defineComponent({
    // typeof 用于类型约定
    props: {
        component: {
            type: Object as PropType<typeof demo>,
            required: true,
        },
    },
    setup(props) {
        const isShowOverLayMenu = ref(false);
        const selected = ref("本月");
        const isShowOverLay = ref(false);
        const onSelectedChange = (name: string) => {
            selected.value = name;
            if (name === "自定义时间") {
                isShowOverLay.value = true;
            }
        };
        const onClick = () => {
            isShowOverLayMenu.value = !isShowOverLayMenu.value;
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
                    {isShowOverLayMenu.value && (
                        <OverLay
                            onClose={() => (isShowOverLayMenu.value = false)}
                        />
                    )}
                    <NavBar title="山竹记账" icon={menu} onClick={onClick} />
                    <main class="h-[calc(100vh-80px)] overflow-auto">
                        <Tabs
                            selected={selected.value}
                            onSelectedChange={onSelectedChange}
                        >
                            <Tab name="本月">
                                <props.component
                                    startDate={timeList[0].start.format()}
                                    endDate={timeList[0].end.format()}
                                />
                            </Tab>
                            <Tab name="上个月">
                                <props.component
                                    startDate={timeList[1].start.format()}
                                    endDate={timeList[1].end.format()}
                                />
                            </Tab>
                            <Tab name="今年">
                                <props.component
                                    startDate={timeList[2].start.format()}
                                    endDate={timeList[2].start.format()}
                                />
                            </Tab>
                            <Tab name="自定义时间">
                                <Overlay
                                    show={isShowOverLay.value}
                                    class="flex items-center justify-center"
                                >
                                    <div class="w-4/5 h-[35%] border overflow-hidden flex flex-column flex-col">
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
                                            <div class="text-right">
                                                <button
                                                    class="mr-4 p-2 bg-transparent"
                                                    onClick={() => {
                                                        isShowOverLay.value =
                                                            false;
                                                    }}
                                                >
                                                    取消
                                                </button>
                                                <button class="mr-4 p-2 bg-transparent">
                                                    确认
                                                </button>
                                            </div>
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
