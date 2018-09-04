<template>
    <div class="container login">
        <div class="head">Sign In</div>
        <div class="body">
            <p>Please sign in with one of your existing third party accounts. Or, sign up for a 47.89.181.139 account and sign in below:</p>
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="col-sm-1 control-label">Username:</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" placeholder="Username" v-model="form.name">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-1 control-label">Password:</label>
                    <div class="col-sm-3">
                        <input type="password" class="form-control" placeholder="Password" v-model="form.password">
                    </div>
                </div>
                <b-form-checkbox v-model="status">Remember Me:</b-form-checkbox>
            </form>
            <div class="submit">
                <span @click="pwdForgot()">Forgot Password?</span>
                <b-button @click="submit()">Sign In</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import {loginRequest} from '@/utils/api'
export default {
  data () {
    return {
        status:false,
        form:{
            name:'',
            password:'',
        },
    };
  },
  methods: {
    pwdForgot(){
        this.$router.push('/accounts/pwdforget');
    },
    submit(){
        for(var i in this.form){
            if(!this.form[i]){
                alert('请填写完整信息');
                return;
            }
        }
        loginRequest(this.form).then(res=>{
            if(res.userid){
                //this.$message({message: 'Login successful!!!',type: 'success'});
                this.$store.commit('setUserid',{'userid':res.userid,'userName':this.form.name});
                this.$router.push('/');
            }else{
                alert(res.message)
            }
        })
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
            padding-bottom: 20px;
        }
        .form-group{
            display: flex;
            align-items: center;
            .control-label{
                font-weight: bold;
            }
            input{
                height: 34px;
            }
        }
        .custom-control{
            margin-left: 15px;
            font-weight: bold;
        }
        .submit{
            margin-left: 15px;
            margin-top: 10px;
            span{
                color: #337ab7;
                cursor: pointer;
                margin-right: 10px;
            }
        }
    }
}

</style>
