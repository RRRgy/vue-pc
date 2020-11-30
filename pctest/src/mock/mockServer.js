import Mock from "mockjs"
import banners from "./rbanners.json"
import floors from "./rfloors.json";
// 一旦运行拦截一个请求。请求地址是第一个参数：请求地址   第二个参数：请求方式   第三个：响应的数据
Mock.mock('/mock/banners', 'get', {
    code: 200,
    "data|4": banners,  //data是个数组，长度是4
})   

Mock.mock('/mock/floors', 'get', {
    code: 200,
    "data|3-5": floors,  
})   