<template>
  <div>
    <lg-head></lg-head>
    <div class="container">
      <lg-panel title="全部产品"></lg-panel>
      <div class="kuang">
        <div class="head">新订单</div>
        <div class="body">
          <div class="car-table">
            <table>
              <tr>
                <th>产品名称</th>
                <th>单价</th>
                <th>数量</th>
                <th>小计</th>
              </tr>
              <tr v-for="i in carList">
                <td>{{i.product}}</td>
                <td>{{i.price}}</td>
                <td>{{i.quantity}}</td>
                <td>{{parseFloat(i.price) * parseFloat(i.quantity)}}</td>
              </tr>
            </table>
            <b-button variant="warning" @click="submit(1)" size="sm">回购物车</b-button>
            <b-button variant="warning" @click="submit(2)" size="sm">回首页</b-button>
          </div>
        </div>
        <div class="bottom">
          <h1>总计: {{allPrice()}}元</h1>
          <div class="lg-row">
            <i>收件人姓名：</i><input type="text" v-model="form.name">
          </div>
          <div class="lg-row">
            <i>邮件地址：</i><input type="text" v-model="form.addr">
          </div>
          <div class="lg-row">
            <i>联系电话：</i><input type="number" v-model="form.phone">
          </div>
          <b-button variant="warning" @click="submit(3)" size="sm">下订单</b-button>
        </div>
      </div>
    </div>
    <lg-footer></lg-footer>
  </div>
</template>

<script>
import {listorderRequest,addtoMyorderRequest} from '@/utils/api'
import head from '@/components/head'
import footer from '@/components/footer'
import panel from '@/components/panel'
export default {
  components: {
    'lg-head':head,
    'lg-footer':footer,
    'lg-panel':panel,
  },
  data () {
    return {
      carList:[],  
      form:{
        name:'',
        addr:'',
        phone:'',
      }
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init(){
      listorderRequest({}).then(res=>{
        this.carList = res.data;
      })
    },
    allPrice(){
      var all = 0;
      if(this.carList.length > 0){
        for(var i of this.carList){
          all += parseFloat(i.price) * parseFloat(i.quantity);
        }
      }
      return all;
    },
    submit(val){
      if(val == 1){
        this.$router.push('/car');
      }else if(val == 2){
        this.$router.push('/');
      }else if(val == 3){
        for(var i in this.form){
            if(!this.form[i]){
                alert('请填写完整信息');
                return;
            }
        }
        addtoMyorderRequest(this.form).then(res=>{
          this.$router.push('/myorders');
        })
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.kuang{
  box-shadow: 0 1px 2px rgba(0,0,0,.05);
  border: 1px solid #bce8f1;
  border-radius: 4px;
  margin-bottom: 40px;
  background: #fff;
  padding: 0;
  .head{
    color: #31708f;
    background-color: #d9edf7;
    border-bottom:1px solid#bce8f1;
    font-size: 18px;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .body{
    padding: 20px 15px;
    .car-table{
      width: 100%;
      table{
        width: 100%;
        border:1px solid #e1e1e1;
        margin-bottom: 20px;
        tr{
          border-bottom:1px solid #e1e1e1;
          th,td{
            text-align:center;
            padding: 8px 0;
            border-right: 1px solid #e1e1e1;
          }
        }
      }
    }
  }
  .bottom{
    padding:15px;
    background: #f5f5f5;
    h1{
      margin-bottom: 10px;
    }
    .lg-row{
      i{
        display: inline-block;
        min-width: 90px;
      }
      input{
        height: 30px;
        border: 1px solid #e1e1e1;
        padding: 0 5px;
      }
    }
  }
}
</style>