import { NavBar } from "@/components/navBar";
import { defineComponent, reactive, ref } from "vue";
import menu from "@/assets/icons/menu.svg";
import { Tab, Tabs } from "@/components/tabs";
import { ItemSummary } from "../itemSummary";
import { Time } from "@/utils/time";

export const ItemList = defineComponent({
    setup() {
        const onClick = () => {
            console.log("itemList");
        };
        const selected = ref("本月");
        const onSelectedChange = (name: string) => {
            console.log("name", name);
            console.log("tabs change");
            selected.value = name;
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
        const timeListFunction = () => {
            return timeList.map((item) => {
                return (
                    <Tab name={item.name}>
                        <ItemSummary
                            startDate={item.start.format()}
                            endDate={item.end.format()}
                        />
                    </Tab>
                );
            });
        };
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
                                    startDate={new Time().format()}
                                    endDate={new Time().format()}
                                />
                            </Tab>
                            <Tab name="上个月">
                                <ItemSummary
                                    startDate={new Time().format()}
                                    endDate={new Time().format()}
                                />
                            </Tab>
                            <Tab name="今年">
                                <ItemSummary
                                    startDate={new Time().format()}
                                    endDate={new Time().format()}
                                />
                            </Tab>
                            <Tab name="自定义时间">
                                <ItemSummary
                                    startDate={new Time().format()}
                                    endDate={new Time().format()}
                                />
                            </Tab>
                        </Tabs>
                    </main>
                </>
            );
        };
    },
});
