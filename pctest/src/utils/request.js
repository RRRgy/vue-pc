// 封装axios

import axios from "axios";
// import { config } from "vue/types/umd";

const instance = axios.create({
    baseURL: "/api",  //公共基础路径
    headers: {}
});

//设置请求拦截器
instance.interceptors.request.use(
    (config) => {
        return config
    }
);

/* response的数据结构：
{
    headers: { },
    status: { },
    request: { },
    data: { // 响应的数据
        code: 200,
        message: "成功",
        data: {
          nickName: "Administrator",
          name: "Admin",
          token: 90aa16f24d04c7d882051412f9ec45b"
        },
        ok: true
    }
} */
//设置相应拦截器
instance.interceptors.response.use(
    (response) => {
        if (response.data.code === 200) {
            return response.data.data;
        }
        return Promise.reject(response.data.message)
    },
    (error) => {
        const message = error.message || "网络错误";
        return Promise.reject(message);
    }
);
export default instance;