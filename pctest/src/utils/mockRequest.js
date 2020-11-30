// 封装axios

import axios from "axios";
import {Message} from 'element-ui'
import NProgress from "nprogress";
import "nprogress/nprogress.css"

const instance = axios.create({
    baseURL: "/mock",  //公共基础路径
    headers: {}
});

//设置请求拦截器
instance.interceptors.request.use(
    (config) => {

        //开始进度条
        NProgress.start();
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
        //进度条结束
        NProgress.done();

        if (response.data.code === 200) {
            return response.data.data;
        }

        const message = response.data;
        Message.error(message)

        return Promise.reject(message)  //功能失败，返回失败的Promise
    },
    (error) => {
        //进度条结束
        NProgress.done();
        const message = error.message || "网络错误";
        //提示错误
        Message.error(message);
        return Promise.reject(message);
    }
);
export default instance;