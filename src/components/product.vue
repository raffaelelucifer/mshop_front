<template>
    <div class="product">
        <div>
            <b-button variant="info">目前是第{{page}}页</b-button>
            <b-button variant="info" class="last" @click.active="lastClick(1)" v-if="list.hasPrevios">上一页</b-button>
            <b-button variant="info" class="last" @click.active="lastClick(2)" v-if="list.hasNext">下一页</b-button>
        </div>
        <div class="lg-card">
            <b-row v-if="list.cards.length > 0">
                <b-col cols="6" md="4" lg="3" v-for="i in list.cards">
                    <div class="card">
                        <img :src="imgChange(i.image)" alt="">
                        <h1 @click="detail(i)">{{i.name}}</h1>
                        <p>NT$ {{i.price}}</p>
                        <p>库存: {{i.stock}}</p>
                        <p>{{i.description}}</p>
                        <b-button variant="info" class="last add-car" @click.active="addCar(i.id)" v-if="userName">加入购物车</b-button>
                    </div>
                </b-col>
            </b-row>
            <div v-else class="tip">此分类目前没有任何商品</div>
        </div>
        <div class="car">
            <div v-if="carList.length == 0">此购物车为空</div>
            <div v-else @click="car()">
                <img src="../assets/img/cart.png">
                <h1>{{carList.length}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
import {listCartRequest,addintoRequest} from '@/utils/api'
export default {
    props: ['list'],
    data () {
        return {
            page:1,
            carList:[],
        };
    },
    computed: {
        userName(){
            return this.$store.state.user.userName;
        }
    },
    mounted () {
        if(this.userName != "") this.init();
    },
    methods: {
        init(){
            listCartRequest({}).then(res=>{
                this.carList = res.data;
            })
        },
        imgChange(val){
            return "http://"+val;
        },
        lastClick(val){
            if(val == 1){
                this.page -= 1;
                this.$emit('submitt');
            }else if(val == 2){
                this.page += 1;
                this.$emit('clickit');
            }
        },
        addCar(id){
            addintoRequest({"cou":"1","obj":id}).then(res=>{
                this.init();
                alert('添加成功')
            })
        },
        detail(i){
            this.$store.commit('setDetail',i);
            this.$router.push('/product/'+i.id);
        },
        car(){
            this.$router.push('/car');
        }
    },
}
</script>

<style lang='scss' scoped>
.product{
    .btn-info{
        background-image: -webkit-linear-gradient(top,#5bc0de 0,#2aabd2 100%);
        background-image: -o-linear-gradient(top,#5bc0de 0,#2aabd2 100%);
        background-image: -webkit-gradient(linear,left top,left bottom,from(#5bc0de),to(#2aabd2));
        background-image: linear-gradient(to bottom,#5bc0de 0,#2aabd2 100%);
        border: 1px solid #28a4c9;
        background-color: #2aabd2;
        color: #fff;
        font-size: 14px;
    }
    .btn:focus, .btn.focus {
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .last{
        color: #337ab7;
    }
    .add-car{
        width: 120px;
        margin-bottom: 10px;
    }
    .lg-card{
        padding-top: 20px;
        .card{
            padding: 3px 10px;
            margin-bottom: 10px;
            img{
                height: auto;
                width: 95%;
                margin: 0 auto;
            }
            h1{
                cursor: pointer;
                margin: 10px 0;
                font-size: 18px;
                color: #337ab7;
            }
            p{
                margin-bottom: 10px;
                i{
                    margin-left: 10px;
                }
            }
        }
        .tip{
            text-align: center;
            margin-top: 20px;
            margin-bottom: 10px;
            font-size: 24px;
        }
    }
    .car{
        margin: 30px 0;
        div{
            position: relative;
            cursor: pointer;
            img{
                height: 60px;
            }
            h1{
                position: absolute;
                top: 10px;
                left: 50px;
                height: 16px;
                width: 16px;
                background: red;
                color: #fff;
                font-size: 12px;
                border-radius: 50%;
                text-align: center;
            }
        }
    }
}
</style>