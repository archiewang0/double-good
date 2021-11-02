<template>
    <div>
        <slot :passVal= val></slot>

        <div class="other">
            <slot name="other" otherVal="123456"></slot>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup() {
        const val = ref('從slot把值傳給parent')
        return{
            val,
        }
    },
}
</script>

<style lang="scss" scoped>
div{
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 5px 10px rgba($color: #000000, $alpha: .4);
    padding: 20px;
    position: relative;
    .other{
        position: absolute;
        bottom: -20px;
        right: 10px;
        width: 50px;
        height: 50px;
        background-color: green;
    }
}
</style>