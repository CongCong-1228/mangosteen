import { CommonButton } from "@/components/button";
import { Form, FormItem } from "@/components/form";
import { defineComponent, reactive } from "vue";
import { Rules, validate } from "@/utils/validate";
import { NavBar } from "@/components/navBar";
import left from "@/assets/icons/back.svg";
import mangosteen from "@/assets/icons/mangosteen.png";

export const LoginPage = defineComponent({
    props: {},
    setup() {
        const formData = reactive({
            name: "",
            email: "",
            loginCode: "",
        });
        const errors = reactive<{ [k in keyof typeof formData]?: string[] }>(
            {}
        );
        const onSubmit = (e: Event) => {
            console.log("submit");
            e.preventDefault();
            const rules: Rules<typeof formData> = [
                { key: "name", type: "required", message: "必填" },
                {
                    key: "name",
                    type: "pattern",
                    regex: /^.{1,10}$/,
                    message: "只能填 1 到 10 个字符",
                },
                { key: "email", type: "required", message: "必填" },
                {
                    key: "email",
                    type: "pattern",
                    regex: /^.{1,4}$/,
                    message: "只能填 1 到 4 个字符",
                },
                { key: "loginCode", type: "required", message: "必填" },
                {
                    key: "loginCode",
                    type: "pattern",
                    regex: /^.{1,6}$/,
                    message: "只能填 1 到 6 个字符",
                },
            ];
            Object.assign(errors, {
                name: undefined,
                email: undefined,
                loginCode: undefined,
            });
            Object.assign(errors, validate(formData, rules));
        };
        return () => {
            return (
                <>
                    <NavBar
                        title="登录"
                        icon={left}
                        onClick={() => {
                            console.log("返回");
                        }}
                    />
                    <div class="flex items-center justify-center flex-col p-4 pt-6">
                        <img src={mangosteen}></img>
                        <h2 class="text-3xl font-bold text-[#7878FF] pt-2">
                            山竹记账
                        </h2>
                    </div>
                    <Form class="w-full flex flex-col" onSubmit={onSubmit}>
                        <FormItem
                            label="用户名"
                            type="text"
                            placeholder="请输入用户名"
                            v-model={formData.name}
                            error={errors["name"] && errors["name"][0]}
                        />
                        <FormItem
                            label="邮箱地址"
                            type="text"
                            placeholder="请输入邮箱，然后发送验证码"
                            v-model={formData.email}
                            error={errors["email"] && errors["email"][0]}
                        />
                        <FormItem
                            label="验证码"
                            type="loginCode"
                            placeholder="六位数字"
                            v-model={formData.loginCode}
                            onClick={() => {
                                console.log("发送验证吗");
                            }}
                            countFrom={60}
                            error={
                                errors["loginCode"] && errors["loginCode"][0]
                            }
                        />
                    </Form>
                    <div class="w-full px-4">
                        <CommonButton title="登录" clickEvent={onSubmit} />
                    </div>
                </>
            );
        };
    },
});
