export const imageLoad = (url: string) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.onload = () => {
            if (xhr.readyState === 4) {
                resolve(xhr.response);
            } else {
                reject(new Error("Image not load successfully"));
            }
        };
        xhr.onerror = () => {
            reject(new Error("There was a network error"));
        };
        xhr.send();
    });
};

export const loadImage = (object: Blob) => {
    const imageUrl = window.URL.createObjectURL(object);
    const body = document.querySelector("body");
    const url = new Image();
    url.src = imageUrl;
    url.onload = () => {};
};
