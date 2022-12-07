import { computed, onMounted, onUnmounted, ref, Ref } from "vue";

interface Point {
    x: number;
    y: number;
}

export const useSwipe = (element: Ref) => {
    const start = ref<Point>();
    const end = ref<Point>();
    const isSwiping = ref<boolean>(false);

    // 记录距离
    const distance = computed(() => {
        if (!(start.value && end.value && isSwiping)) return undefined;
        const distanceX = end.value.x - start.value.x;
        const distanceY = end.value.y - start.value.y;
        return {
            distanceX,
            distanceY,
        };
    });

    // 记录方向
    const direction = computed(() => {
        if (!distance.value) return undefined;
        const { distanceX, distanceY } = distance.value;
        if (Math.abs(distanceX) > Math.abs(distanceY)) {
            return distanceX > 0 ? "right" : "left";
        } else {
            return distanceY > 0 ? "down" : "up";
        }
    });

    const onStart = (e: TouchEvent) => {
        const div = e.target as HTMLDivElement;
        if (div.innerText === "下一页" || div.innerText === "开启应用") {
            div.click();
            return;
        } else {
            e.preventDefault();
            isSwiping.value = true;
            start.value = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
            };
        }
    };

    const onMove = (e: TouchEvent) => {
        e.preventDefault();
        if (!start.value) return;
        end.value = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
        };
    };

    const onEnd = (e: TouchEvent) => {
        e.preventDefault();
        isSwiping.value = false;
        start.value = undefined;
        end.value = undefined;
    };

    onMounted(() => {
        if (!element.value) {
            return;
        }
        element.value.addEventListener("touchstart", onStart);
        element.value.addEventListener("touchmove", onMove);
        element.value.addEventListener("touchend", onEnd);
    });
    onUnmounted(() => {
        if (!element.value) {
            return;
        }
        element.value.removeEventListener("touchstart", onStart);
        element.value.removeEventListener("touchmove", onMove);
        element.value.removeEventListener("touchend", onEnd);
    });

    return {
        direction,
        distance,
        isSwiping,
    };
};
