import { Form, FormItem } from "@/components/form";
import {
    PropType,
    computed,
    defineComponent,
    onMounted,
    reactive,
    ref,
} from "vue";
import * as eCharts from "echarts";
import tagIcon from "@/assets/icons/tagIcon.svg";

export const Charts = defineComponent({
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
    setup(props) {
        const selectValue = ref("output");
        const LineChartDom = ref<HTMLDivElement>();
        const RoundChartDom = ref<HTMLDivElement>();
        const demoData = reactive([
            {
                tag: { id: 1, name: "房租", sign: tagIcon },
                amount: 3000,
            },
            {
                tag: { id: 2, name: "吃饭", sign: tagIcon },
                amount: 1000,
            },
            {
                tag: { id: 3, name: "机票", sign: tagIcon },
                amount: 2000,
            },
        ]);
        const betterDemoData = computed(() => {
            const total = demoData.reduce((sum, item) => {
                return sum + item.amount;
            }, 0);
            return demoData.map((item) => ({
                ...item,
                percent: Math.round((item.amount / total) * 100) + "%",
            }));
        });
        onMounted(() => {
            if (!LineChartDom.value) {
                return;
            }
            const LineChart = eCharts.init(LineChartDom.value);
            const option = {
                grid: [
                    {
                        top: 10,
                        bottom: 20,
                        width: "auto",
                        height: "auto",
                        right: 20,
                    },
                ],
                xAxis: {
                    type: "category",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: "line",
                    },
                ],
            };
            LineChart.setOption(option);
        });
        onMounted(() => {
            if (!RoundChartDom.value) {
                return;
            }
            const RoundChart = eCharts.init(RoundChartDom.value);
            const option = {
                grid: [
                    {
                        top: 30,
                        bottom: 20,

                        right: 20,
                    },
                ],
                series: [
                    {
                        name: "Access From",
                        type: "pie",
                        radius: "50%",
                        data: [
                            { value: 1048, name: "Search Engine" },
                            { value: 735, name: "Direct" },
                            { value: 580, name: "Email" },
                            { value: 484, name: "Union Ads" },
                            { value: 300, name: "Video Ads" },
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)",
                            },
                        },
                    },
                ],
            };
            RoundChart.setOption(option);
        });

        return () => {
            return (
                <>
                    <Form>
                        <FormItem
                            type="select"
                            label="类型"
                            v-model={selectValue.value}
                            options={[
                                { value: "output", text: "支出" },
                                { value: "income", text: "收入" },
                            ]}
                        ></FormItem>
                    </Form>
                    <div ref={LineChartDom} class="h-52 w-full"></div>
                    <div ref={RoundChartDom} class="h-64 w-full"></div>
                    {betterDemoData.value.map((item) => (
                        <div
                            class="flex justify-start items-center p-4 w-full"
                            key={item.tag.id}
                        >
                            <div class="rounded-full bg-[#efefef] h-12 w-12 mr-2 flex items-center justify-center">
                                <img
                                    src={item.tag.sign}
                                    class="h-4 w-4 object-cover"
                                    alt=""
                                />
                            </div>
                            <div class="flex flex-col justify-start items-start grow">
                                <div class=" text-[#666] font-[350] text-xs flex justify-between w-full mb-2">
                                    <h4>
                                        {item.tag.name + " - " + item.percent}
                                    </h4>
                                    <h4>{`￥ ${item.amount}`}</h4>
                                </div>
                                <div class="rounded w-full h-2 relative">
                                    <div
                                        class={`absolute top-0 rounded bg-[#EBA953] w-[${item.percent}] h-full`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            );
        };
    },
});
