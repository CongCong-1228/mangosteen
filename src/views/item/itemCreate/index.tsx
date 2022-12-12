import { defineComponent, ref } from "vue";
import { NavBar } from "../../../components/navBar";
import backIcon from "../../../assets/icons/back.svg";
import { Tabs, Tab } from "../../../components/tabs";

export const ItemCreate = defineComponent({
    setup() {
        const back = () => {
            console.log("back");
        };
        const selected = ref("支出");
        return () => {
            return (
                <>
                    <NavBar title="记一笔" icon={backIcon} onClick={back} />
                    <Tabs
                        selected={selected.value}
                        onSelectedChange={(name: string) =>
                            (selected.value = name)
                        }
                    >
                        <Tab name="支出">list1</Tab>
                        <Tab name="收入">list2</Tab>
                    </Tabs>
                </>
            );
        };
    },
});
