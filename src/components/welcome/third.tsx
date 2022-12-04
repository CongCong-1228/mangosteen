import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import chart from "../../assets/icons/chart.png";
export const Third = defineComponent({
    setup() {
        return () => {
            return (
                <div class="flex flex-col grow items-center justify-start w-full rounded-2xl bg-white">
                    <img
                        src={chart}
                        alt=""
                        class="object-cover max-h-32 max-w-32 mt-24 mb-14"
                    />
                    <div class="text-2xl font-[350] text-center leading-tight mb-20">
                        <p>会挣钱</p>
                        <p>还要会省钱</p>
                    </div>
                    <RouterLink
                        to=""
                        class="text-2xl mb-8 font-bold leading-2xl cursor-pointer text-[#6035BF]"
                    >
                        下一页
                    </RouterLink>
                </div>
            );
        };
    },
});
