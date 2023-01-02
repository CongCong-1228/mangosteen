import { defineComponent } from "vue";
import { NavBar } from "../../../components/navBar";
import left from "@/assets/icons/back.svg";
import "./index.scss";
import { CommonButton } from "@/components/button";

export const TagCreate = defineComponent({
    setup() {
        const reg = new RegExp("/^[\u4e00-\u9fa5]{2,4}$/");
        const onClick = () => {
            console.log("确定");
        };
        return () => {
            return (
                <>
                    {" "}
                    <NavBar
                        title="新建标签"
                        icon={left}
                        onClick={() => console.log("back")}
                    ></NavBar>
                    <main class="w-full pt-[34px] pb-[60px] px-4">
                        <div class="flex items-start justify-center flex-col">
                            <form action="" class="w-full flex flex-col">
                                <label class="flex flex-col items-start pb-[22px]">
                                    <span class="text-[18px] font-[350] mb-[10px]">
                                        标签名
                                    </span>
                                    <input
                                        class="tagTitle border-solid border w-full h-[48px] rounded-lg border-[#5C33BE] pl-[16px]"
                                        type="text"
                                        placeholder="2到4个汉字"
                                        maxlength={4}
                                    />
                                </label>
                                <label class="flex flex-col items-start w-full grow">
                                    <span class="mb-[10px]">符号</span>
                                    <div class="flex flex-col border-solid border border-[#5C33BE] pt-[10px] px-[12px] w-full rounded-lg">
                                        <nav class="flex items-center justify-between">
                                            <span>表情</span>
                                            <span>手势</span>
                                            <span>职业</span>
                                            <span>衣服</span>
                                            <span>动物</span>
                                            <span>自然</span>
                                            <span>食物</span>
                                            <span>运动</span>
                                        </nav>
                                        <div>
                                            <ul class="flex flex-wrap">
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                                <li>5</li>
                                                <li>6</li>
                                                <li>7</li>
                                                <li>8</li>
                                                <li>9</li>
                                                <li>10</li>
                                                <li>11</li>
                                                <li>12</li>
                                                <li>13</li>
                                                <li>14</li>
                                                <li>15</li>
                                                <li>16</li>
                                                <li>17</li>
                                                <li>18</li>
                                                <li>19</li>
                                                <li>20</li>
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                                <li>5</li>
                                                <li>6</li>
                                                <li>7</li>
                                                <li>8</li>
                                                <li>9</li>
                                                <li>10</li>
                                                <li>11</li>
                                                <li>12</li>
                                                <li>13</li>
                                                <li>14</li>
                                                <li>15</li>
                                                <li>16</li>
                                                <li>17</li>
                                                <li>18</li>
                                                <li>19</li>
                                                <li>20</li>
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                                <li>5</li>
                                                <li>6</li>
                                                <li>7</li>
                                                <li>8</li>
                                                <li>9</li>
                                                <li>10</li>
                                                <li>11</li>
                                                <li>12</li>
                                                <li>13</li>
                                                <li>14</li>
                                                <li>15</li>
                                                <li>16</li>
                                                <li>17</li>
                                                <li>18</li>
                                                <li>19</li>
                                                <li>20</li>
                                            </ul>
                                        </div>
                                    </div>
                                </label>
                                <p class="text-[16px] font-[350] mt-[26px] text-center mb-[30px]">
                                    记账时长按标签，即可进行编辑
                                </p>
                                <CommonButton
                                    title="确定"
                                    clickEvent={onClick}
                                />
                            </form>
                        </div>
                    </main>
                </>
            );
        };
    },
});
