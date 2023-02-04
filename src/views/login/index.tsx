import { CommonButton } from "@/components/button";
import { Form, FormItem } from "@/components/form";
import { defineComponent, reactive } from "vue";

export const LoginPage = defineComponent({
    props: {},
    setup() {
        const formData = reactive({
            email: "",
            loginCode: "",
        });
        return () => {
            return (
                <>
                    <Form class="w-full flex flex-col">
                        <FormItem
                            label="邮箱地址"
                            type="text"
                            placeholder="请输入邮箱，然后发送验证码"
                            v-model={formData.email}
                        />
                        <FormItem
                            label="验证码"
                            type="loginCode"
                            placeholder="六位数字"
                            v-model={formData.loginCode}
                        />
                    </Form>
                    <div class="w-full px-4">
                        <CommonButton
                            title="登录"
                            clickEvent={() => console.log("登录")}
                        />
                    </div>
                    <span>{formData.email}</span>
                    <span>{formData.loginCode}</span>
                </>
            );
        };
    },
});
