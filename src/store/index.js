import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import VuexPersist from 'vuex-persist'
const vuexLocal = new VuexPersist({
    storage:window.sessionStorage
});

const store = new Vuex.Store({
    state:{
        user:{
            userid:0,
            userName:'',
        },
        detail:{}
    },
    mutations:{
        setUserid (state, msg) {
            state.user = msg;
        },
        setDetail (state, msg) {
            state.detail = msg;
        },
    },
    plugins:[vuexLocal.plugin],
})

export default store