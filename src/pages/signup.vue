<template>
    <div class="container login">
        <div class="head">Sign Up</div>
        <div class="body">
            <p>Already have an account? Then please <i @click="signin()">sign in.</i></p>
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="col-sm-1 control-label">Username:</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" placeholder="Username" v-model="form.name">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-1 control-label">E-mail (optional):</label>
                    <div class="col-sm-3">
                        <input type="email" class="form-control" placeholder="E-mail address" v-model="form.email">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-1 control-label">Password:</label>
                    <div class="col-sm-3">
                        <input type="password" class="form-control" placeholder="Password" v-model="form.password">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-1 control-label">Password (again):</label>
                    <div class="col-sm-3">
                        <input type="password" class="form-control" placeholder="Password (again)" v-model="pwd">
                    </div>
                </div>
            </form>
            <div class="submit">
                <b-button @click="submit()">Sign Up</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import {registerRequest} from '@/utils/api'
export default {
  data () {
    return {
        form:{
            name:'',
            email:'',
            password:'',
        },
        pwd:'',
    };
  },
  mounted(){

  },
  methods: {
    signin(){
        this.$router.push('/accounts/login');
    },
    submit(){
        for(var i in this.form){
            if(!this.form[i]){
                alert('请填写完整信息');
                return;
            }
        }
        if(!(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/).test(this.form.email)){
            alert('邮箱格式不正确');
            return;
        }
        if(this.form.password != this.pwd){
            alert('两次密码输入不一致');
            return;
        }
        registerRequest(this.form).then(res=>{
            alert('注册成功!');
            this.$router.push('/accounts/login');
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
            margin-bottom: 10px;
            margin-left: 15px;
            i{
                color: #337ab7;
                cursor: pointer;
            }    
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
