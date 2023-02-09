import { defineComponent, onMounted, ref } from "vue";
import * as eCharts from "echarts";

export const PieChart = defineComponent({
    setup(props, ctx) {
        const PieChartDom = ref<HTMLDivElement>();

        onMounted(() => {
            if (!PieChartDom.value) {
                return;
            }
            const RoundChart = eCharts.init(PieChartDom.value);
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
            return <div ref={PieChartDom} class="h-64 w-full"></div>;
        };
    },
});
