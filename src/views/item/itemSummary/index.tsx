import { PropType, defineComponent } from "vue";
import tagIcon from "@/assets/icons/tagIcon.svg";
export const ItemSummary = defineComponent({
    props: {
        startDate: {
            type: String as PropType<string>,
            required: true,
        },
        endDate: {
            type: String as PropType<string>,
            required: true,
        },
    },
    setup(props) {
        return () => {
            return (
                <div class="w-full">
                    <div class="mx-4 mt-4 h-16 rounded-lg bg-[#252A43] opacity-100 flex items-center justify-around">
                        <div class="text-[#FE7275] text-base text-center">
                            <div>收入</div>
                            <div>128</div>
                        </div>
                        <div class="text-[#53A867] text-base text-center">
                            <div>支出</div>
                            <div>100</div>
                        </div>
                        <div class="text-[#FFFFFF] text-base text-center">
                            <div>净收入</div>
                            <div>28</div>
                        </div>
                    </div>
                    <ul class="w-full mt-6">
                        <li class="flex h-16 pl-6 items-center justify-between border-b border-[#eee]">
                            <div class="w-full flex items-center relative">
                                <div class="w-12 h-12 mr-3 rounded-[50%] flex justify-center items-center mb-2 bg-[#efefef]">
                                    <img src={tagIcon} alt="" />
                                </div>
                                <div class="text-base font-[350]">
                                    <div class="text-[#000] text-left">
                                        旅行
                                    </div>
                                    <div class="text-[#999] text-right">
                                        2021-01-01 12:31
                                    </div>
                                </div>
                                <div class="text-[#53A867] absolute right-4 top-3">
                                    ￥ 1234
                                </div>
                            </div>
                        </li>
                        <li class="flex h-16 pl-6 items-center justify-between border-b border-[#eee]">
                            <div class="w-full flex items-center relative">
                                <div class="w-12 h-12 mr-3 rounded-[50%] flex justify-center items-center mb-2 bg-[#efefef]">
                                    <img src={tagIcon} alt="" />
                                </div>
                                <div class="text-base font-[350]">
                                    <div class="text-[#000] text-left">
                                        旅行
                                    </div>
                                    <div class="text-[#999] text-right">
                                        2021-01-01 12:31
                                    </div>
                                </div>
                                <div class="text-[#53A867] absolute right-4 top-3">
                                    ￥ 1234
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            );
        };
    },
});
