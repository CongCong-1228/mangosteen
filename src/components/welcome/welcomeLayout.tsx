import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export const WelcomeLayout = defineComponent({
    setup(props, context) {
        const {
            attrs: { icon, title, buttonLink },
        }: any = context;
        return () => {
            return (
                <div class="flex flex-col items-center justify-start w-full rounded-2xl bg-white">
                    <img
                        src={icon}
                        alt=""
                        class="object-cover max-h-32 max-w-32 mt-20 mb-14"
                    />
                    <div class="text-2xl font-[350] text-center leading-tight mb-16">
                        <p>{title.title1}</p>
                        <p>{title.title2}</p>
                    </div>
                    <RouterLink
                        to={buttonLink}
                        class="text-2xl absolute bottom-8 font-bold leading-2xl cursor-pointer text-[#6035BF]"
                    >
                        下一页
                    </RouterLink>
                </div>
            );
        };
    },
});
