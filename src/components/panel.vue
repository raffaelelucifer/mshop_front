<template>
    <div class="panel">
        <h1>欢迎光临迷你电商</h1>
        <h2 v-if="title">【{{title}}】</h2>
        <h3 v-if="userName == ''">欢迎使用GitHub或者Twitter注册/登录您的账号才能购买商品</h3>
        <h3 v-if="userName != ''">Welcome: {{userName}}</h3>
    </div>
</template>

<script>
export default {
    props: ['title'],
    computed: {
        userName(){
            return this.$store.state.user.userName;
        }
    }
}
</script>

<style lang='scss' scoped>
.panel{
    box-shadow: 0 1px 2px rgba(0,0,0,.05);
    border: 1px solid #ddd;
    margin-bottom: 20px;
    border-radius: 4px;
    background: #f5f5f5;
    background-image: -webkit-linear-gradient(top,#f5f5f5 0,#e8e8e8 100%);
    background-image: -o-linear-gradient(top,#f5f5f5 0,#e8e8e8 100%);
    background-image: -webkit-gradient(linear,left top,left bottom,from(#f5f5f5),to(#e8e8e8));
    background-image: linear-gradient(to bottom,#f5f5f5 0,#e8e8e8 100%);
    padding: 30px 15px 20px;
    text-align: center;
    h1,h2{
        font-size: 24px;
    }
    h3{
        margin-top: 10px;
    }
}
</style>