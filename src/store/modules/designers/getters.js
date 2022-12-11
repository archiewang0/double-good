export default {
    designers(state,_,rootState){

        const products = rootState.prod.products
        const designers = state.designers

        designers.forEach((i)=>{
            let prodsStr = i.prodIds.join(' ')
            // console.log(prodsStr)
            let getProdsArr = products.filter(prod=>{
                return prodsStr.search(prod.pid) == -1? false :true
            })

            let prodsType = []
            // console.log(getProdsArr)
            getProdsArr.forEach((i)=>{
                if(!prodsType.find(item=>item.trim() == i.type.trim())){
                    prodsType.push(i.type)
                }
        })

            i['prodsType'] = prodsType
        })

        return designers
    }
}