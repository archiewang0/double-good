import mutations from './mutations';
import getters from './getters';

export default {
    namespaced: true,
    // 之後要使用 完全的命名方式取得vuex內容
    state(){
        return{
            indexScrollHidden: false,

            // 接受string
            navState: "",

        }
    },
    mutations: mutations,
    getters: getters,
}