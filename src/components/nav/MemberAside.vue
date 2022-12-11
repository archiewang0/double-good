<template>

        <div class="aside forMember">
            <div>
                <div class="top">
                    <p>
                        MY ACCOUNT
                    </p>
                    
                    <a class="closeBtn" href="javascript:;" @click="closeMember"></a>
                </div>
                <div class="inputBlock">
                    <div>
                        <label>
                            <span>EMAIL</span>
                            <input type="text">
                        </label>

                        <label>
                            <span>PASSWORD</span>
                            <input type="password">
                            <a href="javascript:;"></a>
                        </label>

                        <div class="loginBtn">
                            <a href="javascript:;">
                                LOGIN
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

</template>

<style lang="scss" scoped>
// @import '../../assets/scss/components/navBar';
</style>

<script>
import { useStore} from 'vuex'

export default {
    setup() {
        const store = useStore();

        function closeMember(){
            store.commit('nav/changeNavState',"")
        }

        return{
            closeMember
        }
    },
}
</script>