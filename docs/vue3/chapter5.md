# axios

`Axios`+`TypeScript`封装`axios`使用:

> 慢慢完善，现在初具雏形

```ts
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import store from "../../store/index";

export interface ResponseData<T = any> {
  code: number;
  data: T;
  message?: string;
  error?: string;
}

const icode = "29C8A1608873A09C";

const axiosRequest = axios.create({
  baseURL: "http://apis.imooc.com/api",
  timeout: 1000,
});

// request interceptors
axiosRequest.interceptors.request.use(
  (config) => {
    if (config.method === "get") {
      config.params = {
        icode,
        ...config.params,
      };
    }
    if (config.data instanceof FormData) {
      config.data.append("icode", icode);
    } else {
      config.data = { ...config.data, icode };
    }
    if (store.state.user.token) {
      config.headers.Authorization = "Bearer " + store.state.user.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptors
axiosRequest.interceptors.response.use(
  (response: AxiosResponse<ResponseData>) => {
    // 成功处理
    return Promise.resolve(response);
  },
  (error: AxiosError<ResponseData>) => {
    const status = error.response?.status;
    const errorMessage = error.response?.data.error;
    const message = error.message;
    if (message === "Network Error") {
      console.log("发送请求时网络错误");
    } else if (message.indexOf("timeout") !== -1) {
      console.log("超时处理");
    }
    switch (status) {
      case 401:
        console.log("需要重新登陆", errorMessage);
        break;
      case 403:
        console.log("需要重新登陆", errorMessage);
        break;
      default:
        // 仅仅提示用户
        console.log("仅仅提示用户", errorMessage);
        break;
    }
    return Promise.reject(error);
  }
);

// 为了拿到合理的类型推断
export function request<T>(config: AxiosRequestConfig): Promise<T> {
  return axiosRequest
    .request<ResponseData<T>>(config)
    .then((res) => {
      return res.data.data;
    })
    .catch((e) => {
      return Promise.reject(e);
    });
}

export default request;
```

接下来在使用`request`方法调用的时候，就可以直接拿出`data`同时也让`ts`进行合理的类型推断了。

```ts
import request from '../config/request'

// 获取所有专栏
export function getColumns<T> () {
  return request<T>({
    url: '/columns',
    method: 'get'
  })
}

interface Res {
  message:string
  name:string
}

getColumns<Res>.then(res => {
  // res就会被正确推断成为Res类型
  res.message
  res.name
})

```
