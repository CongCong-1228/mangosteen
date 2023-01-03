import { PropType, defineComponent, ref } from "vue";
import "./index.scss";
import { emojiList } from "@/utils/emojiList";

export const EmojiSelect = defineComponent({
    props: {
        modelValue: {
            type: String as PropType<string>,
        },
    },
    emits: ["update:modelValue"],
    setup(props, context) {
        const selectedTabRef = ref(0);
        const table = [
            {
                index: 0,
                name: "表情",
                list: [
                    "face-smiling",
                    "face-affection",
                    "face-tongue",
                    "face-hand",
                    "face-neutral-skeptical",
                    "face-sleepy",
                    "face-unwell",
                    "face-hat",
                    "face-glasses",
                    "face-concerned",
                    "face-negative",
                    "face-costume",
                ],
            },
            {
                index: 1,
                name: "手势",
                list: [
                    "hand-fingers-open",
                    "hand-fingers-partial",
                    "hand-single-finger",
                    "hand-fingers-closed",
                    "hands",
                    "hand-prop",
                    "body-parts",
                ],
            },
            {
                index: 2,
                name: "人物",
                list: [
                    "person",
                    "person-gesture",
                    "person-role",
                    "person-fantasy",
                    "person-activity",
                    "person-sport",
                    "person-resting",
                ],
            },
            { index: 3, name: "衣服", list: ["clothing"] },
            {
                index: 4,
                name: "动物",
                list: [
                    "cat-face",
                    "monkey-face",
                    "animal-mammal",
                    "animal-bird",
                    "animal-amphibian",
                    "animal-reptile",
                    "animal-marine",
                    "animal-bug",
                ],
            },
            { index: 5, name: "植物", list: ["plant-flower", "plant-other"] },
            { index: 6, name: "自然", list: ["sky & weather", "science"] },
            {
                index: 7,
                name: "食物",
                list: [
                    "food-fruit",
                    "food-vegetable",
                    "food-prepared",
                    "food-asian",
                    "food-marine",
                    "food-sweet",
                ],
            },
            { index: 8, name: "运动", list: ["sport", "game"] },
        ];
        const onClickTab = (index: number) => {
            selectedTabRef.value = index;
        };
        const onClickEmoji = (emoji: string) => {
            context.emit("update:modelValue", emoji);
        };
        return () => {
            return (
                <div class="flex flex-col border-solid border border-[#5C33BE] pt-[10px] px-[12px] w-full rounded-lg">
                    <nav class="emojiTab flex flex-nowrap overflow-auto">
                        {table.map((item) => (
                            <span
                                class={
                                    selectedTabRef.value === item.index
                                        ? "selected"
                                        : ""
                                }
                                onClick={() => onClickTab(item.index)}
                            >
                                {item.name}
                            </span>
                        ))}
                    </nav>
                    <div>
                        <ul class="emojiListWrapper flex flex-wrap items-center overflow-auto">
                            {table[selectedTabRef.value].list.map(
                                (category) => {
                                    const emojis = emojiList.find(
                                        (item) => item[0] === category
                                    );
                                    if (emojis) {
                                        return emojis[1].map((item) => (
                                            <li
                                                class={
                                                    props.modelValue === item
                                                        ? "selectedEmoji"
                                                        : "no-selectedEmoji"
                                                }
                                                onClick={() =>
                                                    onClickEmoji(item)
                                                }
                                            >
                                                {item}
                                            </li>
                                        ));
                                    }
                                }
                            )}
                        </ul>
                    </div>
                </div>
            );
        };
    },
});
