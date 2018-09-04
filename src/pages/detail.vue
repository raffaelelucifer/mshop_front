<template>
  <div>
    <lg-head></lg-head>
    <div class="container">
      <div class="panel"><h1>{{detail.name}}</h1></div>
      <div class="body">
        <img :src="imgChange(detail.image)">
        <div class="right">
          <h2>{{detail.name}}</h2>
          <h3>售价: {{detail.price}}元</h3>
          <h3>库存: {{detail.stock}}</h3>
          <p>商品描述:</p>
          <p>{{detail.description}}</p>
        </div>
      </div>
    </div>
    <lg-footer></lg-footer>
  </div>
</template>

<script>
import head from '@/components/head'
import footer from '@/components/footer'
export default {
  components: {
    'lg-head':head,
    'lg-footer':footer,
  },
  computed: {
    detail(){
      return this.$store.state.detail;
    }
  },
  methods: {
    imgChange(val){
      return "http://"+val;
    },
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
  h1{
    font-size: 24px;
  }
}
.body{
  display: flex;
  justify-content: center;
  img{
    min-width: 345px;
    height: auto;
    margin-right: 30px;
  }
  .right{
    h2{
      font-size: 24px;
      margin-bottom: 15px;
    }
    h3{
      font-size: 22px;
      margin-bottom: 15px;
    }
    p{
      margin-bottom: 10px;
    }
  }
}
</style>