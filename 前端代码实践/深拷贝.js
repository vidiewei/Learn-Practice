const deepClone = function(obj){
    if(typeof obj !== "object"){
        let objClone = obj;
        return objClone;
    } else {
        let objClone = Array.isArray(obj)? []:{};
        const keys = Object.getOwnPropertyNames(obj);
        for(key of keys){
            if(obj[key]&& typeof obj[key]==="object"){
                objClone[key] = deepClone(obj[key]);
            } else {
                objClone[key] = obj[key];
            }
        }
        return objClone;
    }
}

console.log(deepClone([1,2,3]));
