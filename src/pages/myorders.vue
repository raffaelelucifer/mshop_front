<template>
  <div>
    <lg-head></lg-head>
    <div class="container">
      <div class="kuang">
        <div class="head" style="margin:0;padding:15px;">订单已保存，我们会尽快处理</div>
      </div>
      <lg-panel></lg-panel>
      <div class="kuang">
        <div class="head">我的订单</div>
        <div class="body">
          <div class="car-table">
            <table>
              <tr>
                <th>订单编号</th>
                <th>姓名</th>
                <th>地址</th>
                <th>订购时间</th>
                <th>是否付款</th>
                <th>在线付款</th>
              </tr>
              <tr v-for="i in carList">
                <td>{{i.id}}</td>
                <td>{{i.full_name}}</td>
                <td>{{i.address}}</td>
                <td>{{i.createdat}}</td>
                <td>{{i.paid}}</td>
                <td><b-button variant="warning" size="sm">前往付款</b-button></td>
              </tr>
            </table>
          </div>
        </div>
        <div class="bottom"></div>
      </div>
    </div>
    <lg-footer></lg-footer>
  </div>
</template>

<script>
import {listmyorderRequest} from '@/utils/api'
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
      listmyorderRequest({}).then(res=>{
        this.carList = res.data;
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