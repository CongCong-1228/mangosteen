import { defineComponent } from "vue";
import bank from "../assets/icons/bank.png";

export const Index = defineComponent({
    setup() {
        return () => {
            return (
                <>
                    <div>
                        <img src={bank} alt="" />
                    </div>
                </>
            );
        };
    },
});
