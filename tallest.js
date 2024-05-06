function findTall(numbers){
  let largest = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    const index =i
    const element = numbers[i];
    if (element>largest) {
        largest =element
        //console.log(index, element)
    }
    
  }
  return largest
}

const myNumber =[850, 113, 90, 5, 556, 1000];
const largeNumber = findTall(myNumber);
console.log(largeNumber)
