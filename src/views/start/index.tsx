import { defineComponent } from "vue";
import bank from "../../assets/icons/bank.png";
import { CommonButton } from "../../components/button";
import { FloatButton } from "../../components/floatButton";

export const Start = defineComponent({
    setup() {
        const onClick = () => {
            console.log("开始记账");
        };
        return () => {
            return (
                <div class="flex flex-col justify-start items-center">
                    <img
                        alt="logo"
                        src={bank}
                        class="mt-44 w-32 h-32 object-cover mb-28"
                    ></img>
                    <CommonButton
                        title={"开始记账"}
                        clickEvent={onClick}
                    ></CommonButton>
                    <FloatButton />
                </div>
            );
        };
    },
});
