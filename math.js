//for power

const power = Math.pow(2, 8)
console.log(power)

//for gap
const marks1 =30
const marks2 = 50

//const gap = marks1- marks2 
const gap =Math.abs(marks1- marks2)   //for negative into positive

console.log(gap)

if (gap<10) {
    console.log("you are best friend")
    
}

else{
    console.log("yor are'nt best friend")
}

//ceil and floor

const result =Math.ceil(2.0396) // for upper
console.log(result)

const result2 =Math.floor(2.0396) //for lower
console.log(result2)

//random

console.log(Math.round((Math.random()*100)))   //math.round for purno songkha

console.log('  ')

//...looping
for (let index = 0; index < 20; index++) {
    const element =Math.round((Math.random()*8));
    console.log(element);
    
}