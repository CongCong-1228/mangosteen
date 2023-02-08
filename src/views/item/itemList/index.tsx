import { defineComponent } from "vue";
import { ItemSummary } from "../itemSummary";
import { TimeTabsLayout } from "@/components/timeTabsLayout";

export const ItemList = defineComponent({
    setup() {
        return () => {
            return <TimeTabsLayout component={ItemSummary} />;
        };
    },
});
