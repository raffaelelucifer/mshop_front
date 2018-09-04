<template>
    <b-navbar toggleable="md" type="light" variant="light">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand>电商平台</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item @click="hrefUrl('/')" class="active">Home</b-nav-item>
                <b-nav-item-dropdown text="产品">
                    <b-dropdown-item @click="product(1)">书籍</b-dropdown-item>
                    <b-dropdown-item @click="product(2)">食品</b-dropdown-item>
                    <b-dropdown-item @click="product(3)">日用品</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item @click="hrefUrl('/car')" v-if="userName">查看购物车</b-nav-item>
                <b-nav-item @click="hrefUrl('/accounts/pwdreset')" v-if="userName">重置密码</b-nav-item>
                <b-nav-item @click="hrefUrl('/accounts/signout')" v-if="userName">注销</b-nav-item>
                <b-nav-item @click="hrefUrl('/accounts/login')" v-if="!userName">登录</b-nav-item>
                <b-nav-item @click="hrefUrl('/accounts/signup')" v-if="!userName">注册</b-nav-item>
                <b-nav-item href="#">后台管理</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    computed: {
        userName(){
            return this.$store.state.user.userName;
        }
    },
    methods: {
        product(val){
            this.$router.push('/'+val);
        },
        hrefUrl(val){
            this.$router.push(val);
        }
    }
};
</script>

<style lang='scss' scoped>
.bg-light{
    background-image: -webkit-linear-gradient(top,#fff 0,#f8f8f8 100%);
    background-image: -o-linear-gradient(top,#fff 0,#f8f8f8 100%);
    background-image: -webkit-gradient(linear,left top,left bottom,from(#fff),to(#f8f8f8));
    background-image: linear-gradient(to bottom,#fff 0,#f8f8f8 100%);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15), 0 1px 5px rgba(0,0,0,.075);
    background-color: #f8f8f8 !important;
    border: 1px solid transparent;
    border-color: #e7e7e7;
    padding: 0 15px;
    min-height: 50px;
    margin-bottom: 20px;
    .navbar-brand{
        color: #777;
        font-size: 18px;
        padding: 0;
        min-height: 50px;
        line-height: 50px;
    }
    .navbar-brand:hover, .navbar-brand:focus {
        color: #777;
    }
    .navbar-collapse{
        .active,.show{
            background: #DDDDDD;
            box-shadow: inset 0 3px 9px rgba(0,0,0,.075);
        }
        li{
            font-size: 14px;
            padding: 7px;
        }
    }
}
</style>