import { TimeTabsLayout } from "@/components/timeTabsLayout";
import { defineComponent } from "vue";
import { Charts } from "./charts";

export const Statistics = defineComponent({
    props: {},
    setup() {
        return () => {
            return <TimeTabsLayout component={Charts} />;
        };
    },
});
