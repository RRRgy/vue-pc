import Vue from "vue"
import VueRouter from "vue-router"

import Home from '../views/Home';
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";

//重写push和replace方法。让编程式导航重复点击时不报错
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, onComplete, onAbort) {
    if (onComplete && onAbort) {
        return push.call(this, location, onComplete, onAbort)
    }
    return push.call(this, location, onComplete, () => { }); //若不处理失败，则返回空函数
}

VueRouter.prototype.replace = function (location, onComplete, onAbort) {
    if (onComplete && onAbort) {
        return replace.call(this, location, onComplete, onAbort)
    }
    return replace.call(this, location, onComplete, () => { }); //若不处理失败，则返回空函数
}

Vue.use(VueRouter); //安装插件

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        },

        // 当组件加载显示时，meta中的参数会传到$route中
        // 当组件不加载显示时，meta中的参数不会传
        {
            path: "/login",
            component: Login,
            meta: {
                isFooterHide: true,
            }
        },
        {
            path: "/register",
            component: Register,
            meta: {
                isFooterHide: true,
            }
        },
        {
            name: 'search',
            path: "/search/:searchText?",
            component: Search,
        },
    ]
})