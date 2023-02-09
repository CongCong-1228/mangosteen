import { Form, FormItem } from "@/components/form";
import { PropType, defineComponent, ref } from "vue";
import { LineChart } from "../lineChart";
import { PieChart } from "../pieChart";
import { Bars } from "../bars";

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
    setup() {
        const selectValue = ref("output");

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
                    <PieChart />
                    <LineChart />
                    <Bars />
                </>
            );
        };
    },
});
