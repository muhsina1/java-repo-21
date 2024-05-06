function reverseTest(text){
    let reverse=' '
     for (let i = text.length-1; i>= 0; i--) {
        const element = text[i];
        reverse = reverse+ element
        console.log(reverse, )//element)    
     }

     return reverse
}
const myText = 'My name is Muhsina'
reverseTest(myText);