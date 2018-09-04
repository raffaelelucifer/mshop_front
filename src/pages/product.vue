<template>
    <div>
        <lg-head></lg-head>
        <div class="container">
          <lg-panel :title="param.cat==1?'书籍':param.cat==2?'食品':'日用品'"></lg-panel>
          <lg-product :list = data @clickit="next()" @submitt="Previos()"></lg-product>
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
        "cat":1,
        "pag":1
      },
      data:{
        hasNext:false,
        hasPrevios:false,
        cards:[],
      }
    };
  },
  watch: {
    '$route' (to, from) {
      this.init();
    }
  },
  components: {
    'lg-head':head,
    'lg-panel':panel,
    'lg-product':product,
    'lg-footer':footer,
  },
  mounted () {
    this.init();
  },
  methods: {
    init(){
      this.param.cat = this.$route.params.id;
      this.param.pag = 1;
      productRequest(this.param).then(res=>{
        if(res.status == 200){
          this.data.hasNext = res.hasNext;
          this.data.hasPrevios = res.hasPrevios;
          this.data.cards = res.data;
        }else{
          this.data.hasNext = false;
          this.data.hasPrevios = false;
          this.data.cards = [];
        }
      })
    },
    next(){
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