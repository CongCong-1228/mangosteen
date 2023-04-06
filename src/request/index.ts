import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

type JSONValue =
  | string
  | boolean
  | number
  | null
  | undefined
  | JSONValue[]
  | { [key: string]: JSONValue };

export class Request {
  // Axios实例
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      // 根据 process.env.NODE_ENV 区分状态，切换不同的 baseURL
      baseURL: process.env.NODE_ENV === "production" ? "/api/v1" : "/api/v2",
      timeout: 10000,
    });

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 请求前做配置修改
        console.log("config", config);
        return config;
      },
      (error) => {
        // 请求错误做处理
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        // 请求成功做处理
        return response;
      },
      (error) => {
        // 请求错误做处理
        return Promise.reject(error);
      }
    );
  }

  // POST request
  post(
    url: string,
    data?: Record<string, JSONValue>,
    config?: AxiosRequestConfig
  ) {
    return this.instance.request({ ...config, url, method: "POST", data });
  }

  // GET request
  get(url: string, query?: string, config?: AxiosRequestConfig) {
    return this.instance.request({
      ...config,
      url,
      method: "GET",
      params: query,
    });
  }

  // PATCH request
  patch(
    url: string,
    data?: Record<string, JSONValue>,
    config?: AxiosRequestConfig
  ) {
    return this.instance.request({ ...config, url, method: "PATCH", data });
  }

  delete(
    url: string,
    query?: Record<string, string>,
    config?: AxiosRequestConfig
  ) {
    return this.instance.request({
      ...config,
      url,
      params: query,
      method: "DELETE",
    });
  }
}

export const request = new Request();
