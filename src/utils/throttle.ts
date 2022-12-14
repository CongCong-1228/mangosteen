// 节流函数，多次重复操作一段时间只执行一次

export const throttle = <T extends (...args: any) => any>(
    fn: T,
    time: number
) => {
    let timer: number | undefined = undefined;
    return (...args: any[]) => {
        if (timer) {
            return;
        } else {
            fn(...args);
            timer = setTimeout(() => {
                timer = undefined;
            }, time);
        }
    };
};
