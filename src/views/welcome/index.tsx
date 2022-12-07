import { defineComponent, ref, Transition, VNode, watchEffect } from "vue";
import {
    RouteLocationNormalizedLoaded,
    RouterLink,
    RouterView,
    useRoute,
    useRouter,
} from "vue-router";
import Logo from "../../assets/icons/mangosteen.png";
import { useSwipe } from "../../hooks/useSwipe";
import { throttle } from "../../utils/throttle";
import styles from "./index.module.scss";

const routeLeftMaps: Record<string, string> = {
    "/welcome/first": "/welcome/second",
    "/welcome/second": "/welcome/third",
    "/welcome/third": "/welcome/forth",
    "/welcome/forth": "/start",
};

const routeRightMaps: Record<string, string> = {
    "/welcome/first": "/welcome/first",
    "/welcome/second": "/welcome/first",
    "/welcome/third": "/welcome/second",
    "/welcome/forth": "/welcome/third",
};
export const Welcome = defineComponent({
    setup() {
        const main = ref<HTMLElement>();
        const { direction, distance, isSwiping } = useSwipe(main);
        const route = useRoute();
        const router = useRouter();

        const push = throttle((direction: "left" | "right") => {
            router.push(
                direction === "left"
                    ? routeLeftMaps[route.path]
                    : routeRightMaps[route.path]
            );
        }, 500);

        // 监听当前作用域的所有变量
        watchEffect(() => {
            if (direction.value === "left" && isSwiping.value) {
                if (
                    distance.value?.distanceX &&
                    Math.abs(distance.value?.distanceX) >= 50
                ) {
                    push("left");
                }
            }
            if (direction.value === "right" && isSwiping.value) {
                if (
                    distance.value?.distanceX &&
                    Math.abs(distance.value?.distanceX) >= 50
                ) {
                    push("right");
                }
            }
        });

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
                                <Transition
                                    name="slide-fade"
                                    enterActiveClass={
                                        styles.slide_fade_enter_active
                                    }
                                    leaveActiveClass={
                                        styles.slide_fade_leave_active
                                    }
                                    enterFromClass={
                                        direction.value === "left" ||
                                        direction.value === undefined
                                            ? styles.slide_fade_left_enter_from
                                            : styles.slide_fade_right_enter_from
                                    }
                                    leaveToClass={
                                        direction.value === "left" ||
                                        direction.value === undefined
                                            ? styles.slide_fade_left_leave_to
                                            : styles.slide_fade_right_leave_to
                                    }
                                >
                                    {Component}
                                </Transition>
                            )}
                        </RouterView>
                    </main>
                    <RouterLink
                        to="/start"
                        class="absolute top-4 right-4 text-[24px] text-white font-bold cursor-pointer"
                    >
                        {route.path === "/welcome/forth" ? "" : "跳过"}
                    </RouterLink>
                </div>
            );
        };
    },
});
