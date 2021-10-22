<template>
    <div class="selectBar">
        <div>
            <p>main</p>
            <span :style="downArrow"></span>
        </div>
        <div class="list">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    </div>
</template>

<script>
import {computed} from 'vue';
export default {
    setup(){
        const downArrow = computed(()=>{
            return {
                'background': `url('${require('../assets/img/down_arrow-22.svg')}') no-repeat center center`
            }
        });

        return {
            downArrow,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/selectBar';
</style>

