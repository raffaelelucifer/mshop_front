<template>
  <div>
    <lg-head></lg-head>
    <div class="container">
      <lg-panel></lg-panel>
      <div class="kuang">
        <div class="head">我的购物车</div>
        <div class="body">
          <h1 v-if="carList.length == 0">购物车是空的</h1>
          <div v-else class="car-table">
            <table>
              <tr>
                <th>产品名称</th>
                <th>单价</th>
                <th>数量</th>
                <th>小计</th>
                <th>删除</th>
              </tr>
              <tr v-for="(i,index) in carList">
                <td>{{i.name}}</td>
                <td>{{i.price}}</td>
                <td>{{i.quantity}}</td>
                <td>{{i.total_price}}</td>
                <td><img src="../assets/img/delete.png" @click="deleteClick(i.id,index)"></td>
              </tr>
            </table>
            <b-button variant="warning" @click="submit()">我要订阅</b-button>
          </div>
        </div>
        <div class="bottom">
          <h1>总计: {{allPrice()}}元</h1>
        </div>
      </div>
    </div>
    <lg-footer></lg-footer>
  </div>
</template>

<script>
import {listCartRequest,removefromCartRequest,addtoOrderRequest} from '@/utils/api'
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
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init(){
      listCartRequest({}).then(res=>{
        this.carList = res.data;
      })
    },
    deleteClick(id,index){
      removefromCartRequest({'id':id}).then(res=>{
        this.carList.splice(index, 1); 
        this.allPrice();
      })
    },
    allPrice(){
      var all = 0;
      if(this.carList.length > 0){
        for(var i of this.carList){
          all += parseFloat(i.total_price);
        }
      }
      return all;
    },
    submit(){
      addtoOrderRequest({}).then(res=>{
        this.$router.push('/order');
      })
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
            img{
              height: 20px;
              width: auto;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .bottom{
    padding:15px;
    background: #f5f5f5;
  }
}
</style>