<template>
  <div>
    <lg-head></lg-head>
    <div class="container">
      <lg-panel title="全部产品"></lg-panel>
      <lg-product :list = data @clickit="product()" @submitt="Previos()"></lg-product>
      <lg-footer></lg-footer>
    </div>
  </div>
</template>

<script>
import {productRequest} from '@/utils/api'
import head from '@/components/head'
import panel from '@/components/panel'
import product from '@/components/product'
import footer from '@/components/footer'
export default {
  data () {
    return {
      param:{
        "cat":0,
        "pag":0
      },
      data:{
        hasNext:false,
        hasPrevios:false,
        cards:[],
      }
    };
  },
  components: {
    'lg-head':head,
    'lg-panel':panel,
    'lg-product':product,
    'lg-footer':footer,
  },
  mounted(){
    this.product();
  },
  methods: {
    product(){
      this.param.pag++;
      productRequest(this.param).then(res=>{
        this.data.hasNext = res.hasNext;
        this.data.hasPrevios = res.hasPrevios;
        this.data.cards = res.data;
      })
    },
    Previos(){
      this.param.pag--;
      productRequest(this.param).then(res=>{
        this.data.hasNext = res.hasNext;
        this.data.hasPrevios = res.hasPrevios;
        this.data.cards = res.data;
      })
    }
  },
}
</script>

<style lang='scss' scoped>

</style>