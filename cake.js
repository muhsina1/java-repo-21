const jim = [84, 75]
let sum =0
for(var i = 0; i<jim.length; i++){
    sum = sum + jim[i]
    console.log(sum)
}
const dela = [69, 97]
let sum2 =0
for(var j = 0; j<dela.length; j++){
    sum2 = sum2 + dela[j]
    console.log(sum2)
}

if(sum>sum2){
console.log("cake taken jim")
}
else {
    console.log("cake taken dela")
}