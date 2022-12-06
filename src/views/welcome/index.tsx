import { defineComponent, ref, Transition, VNode } from "vue";
import {
    RouteLocationNormalizedLoaded,
    RouterLink,
    RouterView,
} from "vue-router";
import Logo from "../../assets/icons/mangosteen.png";
import "./index.scss";
import { useSwipe } from "../../hooks/useSwipe";

export const Welcome = defineComponent({
    setup() {
        const main = ref<HTMLElement | null>(null);
        useSwipe(main);
        return () => {
            return (
                <div class="min-h-screen  p-4 flex flex-col items-center justify-start bg-gradient-to-b from-[#6336c2] to-[#8f4cd7]">
                    <header class="pt-16 mb-8 flex flex-col justify-start items-center">
                        <img class="mb-2.5 object-cover" src={Logo} alt="" />
                        <span class="text-[32px] text-[#D4D4EE] leading-[32px] font-bold">
                            山竹记账
                        </span>
                    </header>
                    <main class="flex relative grow w-full" ref={main}>
                        <RouterView>
                            {({
                                Component,
                                route,
                            }: {
                                Component: VNode;
                                route: RouteLocationNormalizedLoaded;
                            }) => (
                                <Transition name="slide-fade">
                                    {Component}
                                </Transition>
                            )}
                        </RouterView>
                    </main>
                    <RouterLink
                        to="/start"
                        class="absolute top-4 right-4 text-[24px] text-white font-bold cursor-pointer"
                    >
                        跳过
                    </RouterLink>
                </div>
            );
        };
    },
});
