<template>
    <div class="container login">
        <div class="head">Sign Out</div>
        <div class="body">
            <p>Are you sure you want to sign out?</p>
            <div class="submit">
                <b-button @click="submit()">Sign Out</b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        submit(){
            this.$store.commit('setUserid',{'userid':0,'userName':''});
            this.$router.push('/');
        }
    },
}
</script>

<style lang='scss' scoped>
.login{
    box-shadow: 0 1px 2px rgba(0,0,0,.05);
    border: 1px solid #faebcc;
    border-radius: 4px;
    margin-bottom: 20px;
    background: #fff;
    padding: 0;
    .head{
        color: #8a6d3b;
        background-color: #fcf8e3;
        border-bottom:1px solid#faebcc;
        font-size: 36px;
        padding: 20px 15px;
        margin-bottom: 20px;
    }
    .body{
        padding: 20px 15px;
        p{
            margin-bottom: 10px;
            margin-left: 15px;
            font-size: 18px;
        }
        .submit{
            margin-left: 15px;
            margin-top: 30px;
        }
    }
}

</style>
