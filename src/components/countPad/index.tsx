import { defineComponent, ref } from "vue";
import { DatePicker, DatePickerColumnType, Popup } from "vant";
import dateIcon from "../../assets/icons/date.svg";
export const CountPad = defineComponent({
    setup() {
        const columnsType: DatePickerColumnType[] = ["year", "month", "day"];
        const showDatePicker = ref(false);
        const datePickerValue = ref(new Date().getTime());
        const closeDatePicker = () => {
            showDatePicker.value = false;
        };
        return () => {
            return (
                <>
                    <div class="flex items-center justify-between px-[14px] py-[18px] w-full border-solid border-t-[1px] border-[#DDDDDD]">
                        <div class="flex items-center justify-start">
                            <img
                                src={dateIcon}
                                width={20}
                                height={20}
                                class="mr-[14px]"
                                alt=""
                            />
                            <span
                                onClick={() => (showDatePicker.value = true)}
                                class="font-monospace"
                            >
                                {datePickerValue.value}
                            </span>
                        </div>
                        <div>123456</div>
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
                    </div>
                </>
            );
        };
    },
});
