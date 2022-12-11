import { defineComponent, ref } from "vue";
import bank from "../../assets/icons/bank.png";
import { CommonButton } from "../../components/button";
import { FloatButton } from "../../components/floatButton";
import { NavBar } from "../../components/navBar";
import { OverLay } from "../../components/overLay";

export const Start = defineComponent({
    setup() {
        const menuVisible = ref(false);
        const onClick = () => {
            console.log("开始记账");
        };
        const onClickMenu = () => {
            console.log("click menu");
            menuVisible.value = !menuVisible.value;
        };
        return () => {
            return (
                <div class="h-[100vh] w-[100vw] flex flex-col relative">
                    <NavBar onClick={onClickMenu} />
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
                    {menuVisible.value && <OverLay />}
                </div>
            );
        };
    },
});
