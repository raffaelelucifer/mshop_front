<template>
    <div class="container login">
        <div class="head">Pwd Forgot</div>
        <div class="body">
            <p>Please enter your registered email address</p>
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="col-sm-1 control-label">E-mail:</label>
                    <div class="col-sm-3">
                        <input type="email" class="form-control" placeholder="E-mail address" v-model="form.email">
                    </div>
                </div>
            </form>
            <div class="submit">
                <b-button @click="submit()">Submit</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import {forgetRequest} from '@/utils/api'
export default {
  data () {
    return {
        form:{
            email:'',
        },
    };
  },
  methods: {
    submit(){
        for(var i in this.form){
            if(!this.form[i]){
                alert('请填写完整信息');
                return;
            }
        }
        forgetRequest(this.form).then(res=>{
            alert(res.message)
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
        }
    }
}

</style>
