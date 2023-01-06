import { NavBar } from "@/components/navBar";
import { defineComponent, ref } from "vue";
import menu from "@/assets/icons/menu.svg";
import { Tab, Tabs } from "@/components/tabs";

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
        return () => {
            return (
                <>
                    <NavBar title="山竹记账" icon={menu} onClick={onClick} />
                    <main>
                        <Tabs
                            selected={selected.value}
                            onSelectedChange={onSelectedChange}
                        >
                            <Tab name="本月">list1</Tab>
                            <Tab name="上个月">list2</Tab>
                            <Tab name="今年">list3</Tab>
                            <Tab name="自定义时间">list4</Tab>
                        </Tabs>
                    </main>
                </>
            );
        };
    },
});
