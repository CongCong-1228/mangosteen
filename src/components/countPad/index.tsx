import { defineComponent, ref } from "vue";
import { DatePicker, DatePickerColumnType, Popup } from "vant";
import dateIcon from "../../assets/icons/date.svg";
import dayjs from "dayjs";
export const CountPad = defineComponent({
    setup() {
        const columnsType: DatePickerColumnType[] = ["year", "month", "day"];
        const showDatePicker = ref(false);
        const nowDate = dayjs(new Date());
        const datePickerValue = ref(
            nowDate.year() + "-" + nowDate.month() + "-" + nowDate.date()
        );
        const closeDatePicker = () => {
            showDatePicker.value = false;
        };
        const countNumber = ref("0");
        const countFunction = (count: string | number) => {
            console.log("aaa", count);
            countNumber.value += count.toString();
        };
        const buttons = [
            {
                title: "1",
                onclick: () => countFunction(1),
            },
            {
                title: "2",
                onclick: () => countFunction(2),
            },
            {
                title: "3",
                onclick: () => countFunction(3),
            },
            {
                title: "清空",
                onclick: () => {
                    countNumber.value = "0";
                },
                row2: true,
            },
            {
                title: "4",
                onclick: () => countFunction(4),
            },
            {
                title: "5",
                onclick: () => countFunction(5),
            },
            {
                title: "6",
                onclick: () => countFunction(6),
            },

            {
                title: "7",
                onclick: () => countFunction(7),
            },
            {
                title: "8",
                onclick: () => countFunction(8),
            },
            {
                title: "9",
                onclick: () => countFunction(9),
            },
            {
                title: "提交",
                onclick: () => {
                    console.log("提交");
                },
                row2: true,
            },
            {
                title: "0",
                onclick: () => {
                    if (countNumber.value === "0") return;
                    countFunction("0");
                },
                col2: true,
            },
            {
                title: ".",
                onclick: () => countFunction("."),
            },
        ];
        return () => {
            return (
                <>
                    <div class="flex items-center justify-between px-[14px] py-[16px] w-full border-solid border-t-[1px] border-[#DDDDDD]">
                        <div
                            class="flex items-center justify-start"
                            onClick={() => (showDatePicker.value = true)}
                        >
                            <img
                                src={dateIcon}
                                width={20}
                                height={20}
                                class="mr-[14px]"
                                alt=""
                            />
                            <span class="font-mono text-[#999] text-[12px]">
                                {datePickerValue.value}
                            </span>
                        </div>
                        <div class="font-mono text-[#53A867] text-[20px]">
                            {countNumber.value}
                        </div>
                    </div>
                    <div class="grid grid-cols-4 grid-rows-4 border-t-[1px]">
                        {buttons.map((item) => {
                            return (
                                <button
                                    class={`h-[48px] border-r-[1px] border-b-[1px] ${
                                        item.row2
                                            ? "row-span-2 h-[96px] border-r-0"
                                            : ""
                                    } ${item.col2 ? "col-span-2" : ""} ${
                                        item.title === "0" ||
                                        item.title === "." ||
                                        item.title === "提交"
                                            ? "border-b-0"
                                            : ""
                                    } ${
                                        item.title === "提交"
                                            ? "bg-[#5C33BE] text-[#fff]"
                                            : ""
                                    }`}
                                    onClick={item.onclick}
                                >
                                    {item.title}
                                </button>
                            );
                        })}
                    </div>
                    <Popup position="bottom" show={showDatePicker.value}>
                        <DatePicker
                            // modelValue={datePickerValue.value}
                            columnsType={columnsType}
                            title="选择日期"
                            onConfirm={closeDatePicker}
                            onChange={(e) => {
                                datePickerValue.value =
                                    e.selectedValues.join("-");
                            }}
                            onCancel={closeDatePicker}
                        />
                    </Popup>
                </>
            );
        };
    },
});
