<template>
  <!-- 首先头部顶行和搜索行定义在一区域header -->
  <div class="header">
    <div class="top">
      <!-- 头部最顶行 -->
      <div class="container">
        <!-- 头部顶行左块区域 -->
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>

        <!-- 头部顶行右块区域 -->
        <div class="typeList">
          <a href="#">我的订单</a>
          <a href="#">我的购物车</a>
          <a href="#">我的尚品汇</a>
          <a href="#">尚品汇会员</a>
          <a href="#">企业采购</a>
          <a href="#">关注尚品汇</a>
          <a href="#">合作招商</a>
          <a href="#">商家后台</a>
        </div>
      </div>
    </div>
    <!-- 搜索行 -->
    <div class="bottom">
      <!-- 左块logo区域 -->
      <h1 class="logoArea">
        <router-link class="logo" title="尚品汇" to="/">
          <img src="./images/logo.png" alt=" " />
        </router-link>
      </h1>
      <!-- 右侧搜索区域 -->
      <div class="searchArea">
        <form class="searchForm" @submit.prevent="search">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="searchText"
          />
        <button class="sui-btn btn-xlarge btn-danger">搜索</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    search() {
      /* const { searchText } = this;
      const params = searchText ? `/${searchText}` : "";
      const location = "/search" + params;
      this.$router.push(location); */

      const { searchText } = this;
      const location = {
        name: "search", //命名路由
      };
      if (searchText) {
        location.params = {
          searchText,
        };
      }
      const { categoryName } = this.$route.query;

      if (categoryName) {
        location.query = this.$route.query;
      }

      if (this.$route.name === "search") {
        this.$router.replace(location);
      } else {
        this.$router.push(location);
      }
    },
  },
  mounted() {
    this.$bus.$on("clearKeyword", () => {
      this.searchText = "";
    });
  },
};
</script>

<style lang="less" scoped>
//添加scoped后会给当前组件添加唯一的属性data-v-xxx。此时如果设置样式不会对其它组件产生影响
.container {
  //   font-size: 12px;
  margin: 0 auto;
  width: 1200px;
  overflow: hidden;
  .loginList {
    float: left;

    p {
      float: left;
      margin-right: 10px;
      .register {
        padding: 0 5px;
        margin-left: 7px;
        border-left: 1px solid gray;
      }
    }
  }
  //右块区域样式
  .typeList {
    float: right;

    a {
      padding: 0 13px;
      & + a {
        border-left: 1px solid gray;
      }
    }
  }
}

.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;
  }
  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }
    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
