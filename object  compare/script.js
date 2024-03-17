let obj1 = {
    name : "surendher",
    age : 23,
    qualification : "BCA",
    
};
let obj2 = {
    age : 23,
    qualification : "BCA",
    name : "surendher"
};

let isSame = true
if(Object.keys(obj1).length===Object.keys(obj2).length){
    for(let key in obj1){
        if(obj1[key]===obj2[key]){
        }else{
            isSame = false
            console.log(key + " values are not same")
        }
    }
}else{
    isSame = false
    console.log("not same")
}
if(isSame){
    console.log("objects are same")
}else{
    console.log("objects are not same")
}