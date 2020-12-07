import {
    reqGetCartList,
    reqUpdateCartCheck,
    reqUpdateCartCount,
    // reqDelCart,
} from "@api/shopcart";

export default {
    state: {
        cartList: [], // 所有购物车数据
    },
    getters: {},
    actions: {
        async getCartList({ commit }) {
            const cartList = await reqGetCartList();
            commit("GET_CART_LIST", cartList);
        },
        async updateCartCount({ commit }, { skuId, skuNum }) {
            await reqUpdateCartCount(skuId, skuNum);

            commit("UPDATE_CART_COUNT", { skuId, skuNum });
        },


        async updateCartCheck({ commit }, { skuId, isChecked }) {
            // 发送请求 --> 更新服务器数据
            await reqUpdateCartCheck(skuId, isChecked);

            console.log(commit);
        },
    },
    mutations: {
        GET_CART_LIST(state, cartList) {
            state.cartList = cartList;
        },
        UPDATE_CART_COUNT(state, { skuId, skuNum }) {
            state.cartList = state.cartList.map((cart) => {
                if (cart.skuId === skuId) {
                    cart.skuNum += skuNum;
                }
                return cart;
            });
        },
    },
};
