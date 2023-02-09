import { computed, defineComponent, reactive } from "vue";
import tagIcon from "@/assets/icons/tagIcon.svg";

export const Bars = defineComponent({
    setup() {
        const demoData = reactive([
            {
                tag: { id: 1, name: "房租", sign: tagIcon },
                amount: 3000,
            },
            {
                tag: { id: 2, name: "吃饭", sign: tagIcon },
                amount: 1000,
            },
            {
                tag: { id: 3, name: "机票", sign: tagIcon },
                amount: 2000,
            },
        ]);

        const betterDemoData = computed(() => {
            const total = demoData.reduce((sum, item) => {
                return sum + item.amount;
            }, 0);
            return demoData.map((item) => ({
                ...item,
                percent: Math.round((item.amount / total) * 100) + "%",
            }));
        });

        return () => {
            return betterDemoData.value.map((item) => (
                <div
                    class="flex justify-start items-center p-4 w-full"
                    key={item.tag.id}
                >
                    <div class="rounded-full bg-[#efefef] h-12 w-12 mr-2 flex items-center justify-center">
                        <img
                            src={item.tag.sign}
                            class="h-4 w-4 object-cover"
                            alt=""
                        />
                    </div>
                    <div class="flex flex-col justify-start items-start grow">
                        <div class=" text-[#666] font-[350] text-xs flex justify-between w-full mb-2">
                            <h4>{item.tag.name + " - " + item.percent}</h4>
                            <h4>{`￥ ${item.amount}`}</h4>
                        </div>
                        <div class="rounded w-full h-2 relative">
                            <div
                                style={`width: ${item.percent}`}
                                class={`absolute top-0 rounded bg-[#EBA953]  h-full`}
                            ></div>
                        </div>
                    </div>
                </div>
            ));
        };
    },
});
