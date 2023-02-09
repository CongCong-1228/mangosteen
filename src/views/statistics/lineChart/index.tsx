import { defineComponent, onMounted, ref } from "vue";
import * as eCharts from "echarts";

export const LineChart = defineComponent({
    setup(props) {
        const LineChartDom = ref<HTMLDivElement>();

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
        return () => {
            return <div ref={LineChartDom} class="h-52 w-full"></div>;
        };
    },
});
