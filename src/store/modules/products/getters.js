
// let prodsVar;

export default {
    products(state,_,_2,rootGetters){

        const designers = rootGetters['design/designers']
        let products = state.products;

        products.forEach((prod) => {
            let rename = designers.find(designer=>designer.did == prod.did).name

            // 新建立designer 名稱
            // 兩個資料的合併 不要蓋到原有的,另外再給予key
            // 不要再getter 深度拷貝一個object 並傳出去,會報錯
            prod.designer = rename
        });
        return products
    } 
}

