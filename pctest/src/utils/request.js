
import axios from "axios";
import { Message } from "element-ui";
import getUserTempId from "@utils/getUserTempId";
// store就是vuex的store，也是this.$store
import store from "../store";
// 引入进度条插件
import NProgress from "nprogress";
import "nprogress/nprogress.css";



const userTempId = getUserTempId();

const instance = axios.create({
	
	baseURL: "/api", // 公共的基础路径
	headers: {
		
	},
});

// 设置请求拦截器
instance.interceptors.request.use(
	(config) => {

		NProgress.start();

		// 修改config，用来添加公共的请求参数
		const token = store.state.user.token;
		if (token) {
			config.headers.token = token;
		}

		config.headers.userTempId = userTempId;

		return config;
	}
	
);
// 设置响应拦截器
instance.interceptors.response.use(
	// 响应成功：当响应状态码为 2xx
	(response) => {

		// 进度条结束
		NProgress.done();
		// console.log("response", response);
		// 判断响应的code是否是200
		if (response.data.code === 200) {
			// 返回成功的响应数据
			return response.data.data;
		}

		const { message } = response.data;
		// 提示错误
		Message.error(message);

		return Promise.reject(message);
	},

	(error) => {

		NProgress.done();
		const message = error.message || "网络错误";
		// 提示错误
		Message.error(message);
		return Promise.reject(message);
	}
);

export default instance;
