import { defineComponent } from "vue";
import chartIcon from "../../assets/icons/chartIcon.svg";
import classIcon from "../../assets/icons/classIcon.svg";
import notionIcon from "../../assets/icons/notionIcon.svg";
import exportIcon from "../../assets/icons/exportIcon.svg";
export const OverLay = defineComponent({
    setup() {
        return () => {
            return (
                <>
                    <div class="mt-[26px] bg-[rgba(0,0,0,0.5)] w-full h-full absolute">
                        <div class="bg-[#fff] w-[70%] h-full">
                            <section class="h-36 w-full bg-[#5C33BE] flex flex-col pt-8 pl-4">
                                <span class="text-2xl text-[#fff] font-[350] mb-3">
                                    未登录用户
                                </span>
                                <span class="font-[350] text-base leading-4 text-[#CEA1FF]">
                                    点击这里登录
                                </span>
                            </section>
                            <ul class="flex flex-col justify-center items-start pt-[26px] pl-4">
                                <li class="flex items-center justify-start mb-[35px]">
                                    <img
                                        src={chartIcon}
                                        alt=""
                                        class="object-cover w-auto h-full mr-[25px]"
                                    />
                                    <div class="text-[20px] font-[350] text-[#000] h-[20px]">
                                        统计图表
                                    </div>
                                </li>
                                <li class="flex items-center justify-start mb-[35px]">
                                    <img
                                        src={exportIcon}
                                        alt=""
                                        class="object-cover w-auto h-7 mr-[25px]"
                                    />
                                    <div class="text-[20px] font-[350] text-[#000] h-[20px]">
                                        导出数据
                                    </div>
                                </li>
                                <li class="flex items-center justify-start mb-[35px] h-[20px]">
                                    <img
                                        src={classIcon}
                                        alt=""
                                        class="object-cover w-auto h-7 mr-[25px]"
                                    />
                                    <div class="text-[20px] font-[350] text-[#000] ">
                                        自定义分类
                                    </div>
                                </li>
                                <li class="flex items-center justify-start mb-[35px] h-[20px]">
                                    <img
                                        src={notionIcon}
                                        alt=""
                                        class="object-cover w-auto h-7 mr-[25px]"
                                    />
                                    <div class="text-[20px] font-[350] text-[#000]">
                                        记账提醒
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            );
        };
    },
});
