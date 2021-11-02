<template>
    <h1 style="color: red">
        這是產品頁
    </h1>

</template>

<script>
export default {
    setup() {
        
    },
    beforeRouteEnter(to,from,next){
        console.log('component beforeRouteEnter')
        console.log(to,from)
        next()
    },
}
</script>