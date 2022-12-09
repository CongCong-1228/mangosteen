export const request = (url: string, method: string) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open(method, url);
        request.responseType = "json";
        request.onload = () => {
            if (request.readyState === 4) {
                resolve(request.response);
            } else {
                reject(new Error("出错"));
            }
        };
        request.onerror = () => {
            reject(new Error("服务器出错"));
        };
        request.send();
    });
};

// 1, flex
// 2, fixed top 50% left 50% translate(-50%, -50%)
// 3, table
