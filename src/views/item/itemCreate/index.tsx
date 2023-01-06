import { defineComponent, ref } from "vue";
import { NavBar } from "../../../components/navBar";
import backIcon from "../../../assets/icons/back.svg";
import { Tabs, Tab } from "../../../components/tabs";
import { CountPad } from "../../../components/countPad";
import tagIcon from "@/assets/icons/tagIcon.svg";
import tagAddIcon from "@/assets/icons/tagAddIcon.svg";

export const ItemCreate = defineComponent({
    setup() {
        const back = () => {
            console.log("back");
        };
        const refExpensesTags = ref([
            { id: 1, name: "餐费", sign: tagIcon, type: "expenses" },
            { id: 2, name: "车费", sign: tagIcon, type: "expenses" },
            { id: 3, name: "聚餐", sign: tagIcon, type: "expenses" },
            { id: 4, name: "电影", sign: tagIcon, type: "expenses" },
            { id: 5, name: "餐费", sign: tagIcon, type: "expenses" },
            { id: 6, name: "车费", sign: tagIcon, type: "expenses" },
            { id: 7, name: "聚餐", sign: tagIcon, type: "expenses" },
            { id: 8, name: "电影", sign: tagIcon, type: "expenses" },
            { id: 1, name: "餐费", sign: tagIcon, type: "expenses" },
            { id: 2, name: "车费", sign: tagIcon, type: "expenses" },
            { id: 3, name: "聚餐", sign: tagIcon, type: "expenses" },
            { id: 4, name: "电影", sign: tagIcon, type: "expenses" },
            { id: 5, name: "餐费", sign: tagIcon, type: "expenses" },
            { id: 6, name: "车费", sign: tagIcon, type: "expenses" },
            { id: 7, name: "聚餐", sign: tagIcon, type: "expenses" },
            { id: 8, name: "电影", sign: tagIcon, type: "expenses" },
            { id: 1, name: "餐费", sign: tagIcon, type: "expenses" },
            { id: 2, name: "车费", sign: tagIcon, type: "expenses" },
            { id: 3, name: "聚餐", sign: tagIcon, type: "expenses" },
            { id: 4, name: "电影", sign: tagIcon, type: "expenses" },
            { id: 5, name: "餐费", sign: tagIcon, type: "expenses" },
            { id: 6, name: "车费", sign: tagIcon, type: "expenses" },
            { id: 7, name: "聚餐", sign: tagIcon, type: "expenses" },
            { id: 8, name: "电影", sign: tagIcon, type: "expenses" },
            { id: 1, name: "餐费", sign: tagIcon, type: "expenses" },
            { id: 2, name: "车费", sign: tagIcon, type: "expenses" },
            { id: 3, name: "聚餐", sign: tagIcon, type: "expenses" },
            { id: 4, name: "电影", sign: tagIcon, type: "expenses" },
            { id: 5, name: "餐费", sign: tagIcon, type: "expenses" },
            { id: 6, name: "车费", sign: tagIcon, type: "expenses" },
            { id: 7, name: "聚餐", sign: tagIcon, type: "expenses" },
            { id: 8, name: "电影", sign: tagIcon, type: "expenses" },
            { id: 1, name: "餐费", sign: tagIcon, type: "expenses" },
            { id: 2, name: "车费", sign: tagIcon, type: "expenses" },
            { id: 3, name: "聚餐", sign: tagIcon, type: "expenses" },
            { id: 4, name: "电影", sign: tagIcon, type: "expenses" },
            { id: 5, name: "餐费", sign: tagIcon, type: "expenses" },
            { id: 6, name: "车费", sign: tagIcon, type: "expenses" },
            { id: 7, name: "聚餐", sign: tagIcon, type: "expenses" },
            { id: 8, name: "电影", sign: tagIcon, type: "expenses" },
            { id: 1, name: "餐费", sign: tagIcon, type: "expenses" },
            { id: 2, name: "车费", sign: tagIcon, type: "expenses" },
            { id: 3, name: "聚餐", sign: tagIcon, type: "expenses" },
            { id: 4, name: "电影", sign: tagIcon, type: "expenses" },
            { id: 5, name: "餐费", sign: tagIcon, type: "expenses" },
            { id: 6, name: "车费", sign: tagIcon, type: "expenses" },
            { id: 7, name: "聚餐", sign: tagIcon, type: "expenses" },
            { id: 8, name: "电影", sign: tagIcon, type: "expenses" },
        ]);
        const refIncomeTags = ref([
            { id: 5, name: "工资", sign: tagIcon, type: "income" },
            { id: 6, name: "彩票", sign: tagIcon, type: "income" },
            { id: 7, name: "其他", sign: tagIcon, type: "income" },
        ]);
        const selected = ref("支出");
        return () => {
            return (
                <>
                    <NavBar title="记一笔" icon={backIcon} onClick={back} />
                    <div class="flex flex-col h-[calc(100vh-80px)]">
                        <Tabs
                            selected={selected.value}
                            onSelectedChange={(name: string) =>
                                (selected.value = name)
                            }
                        >
                            <Tab name="支出">
                                <div class="flex flex-col items-center m-3 ml-4">
                                    <div class="w-12 h-12 rounded-[50%] flex justify-center items-center mb-2 bg-[#efefef]">
                                        <img src={tagAddIcon} alt="" />
                                    </div>
                                    <span class="text-xs text-[#666] font-[350] min-h-[16px]"></span>
                                </div>
                                {refExpensesTags.value.map((tag) => {
                                    return (
                                        <div class="flex flex-col items-center m-3 ml-4">
                                            <div class="w-12 h-12 rounded-[50%] flex justify-center items-center mb-2 bg-[#efefef] border border-solid border-[#8F4CD7] shadow shadow-blue-500/40 hover:shadow-indigo-500/40">
                                                <img src={tag.sign} alt="" />
                                            </div>
                                            <span class="text-xs text-[#666] font-[350]">
                                                {tag.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </Tab>
                            <Tab name="收入">
                                <div class="flex flex-col items-center m-3 ml-4">
                                    <div class="w-12 h-12 rounded-[50%] flex justify-center items-center mb-2 bg-[#efefef]">
                                        <img src={tagAddIcon} alt="" />
                                    </div>
                                    <span class="text-xs text-[#666] font-[350] min-h-[16px]"></span>
                                </div>
                                {refIncomeTags.value.map((tag) => {
                                    return (
                                        <div class="flex flex-col items-center m-3 ml-4">
                                            <div class="w-12 h-12 rounded-[50%] flex justify-center items-center mb-2 bg-[#efefef] border border-solid border-[#8F4CD7] shadow shadow-blue-500/40 hover:shadow-indigo-500/40">
                                                <img src={tag.sign} alt="" />
                                            </div>
                                            <span class="text-xs text-[#666] font-[350]">
                                                {tag.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </Tab>
                        </Tabs>
                        <div class=" w-full shrink-0 grow-0">
                            <CountPad />
                        </div>
                    </div>
                </>
            );
        };
    },
});
