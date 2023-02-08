import { Form, FormItem } from "@/components/form";
import { PropType, defineComponent, onMounted, ref } from "vue";
import * as eCharts from "echarts";

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
                </>
            );
        };
    },
});
