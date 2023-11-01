/* const DOMselectors = {
form: document.queryselector("#form"),
firstName: document.querySelector(".first-name"),
//grab all the text input
//grab all the h2s
h2s: document.querySelectorAll("h2"),
}

DOMselectors.form.addEventListener("submit", function(event){
event.preventDefault();
console.log(DOMselectors.firstName.value);    
DOMselectors.h2s.forEach(
(el) => (el.textContent = DOMselectors.firstName.value)
)
}); */

for(i =0; i <= 7; i++){
    console.log(i)
}
/* while(money < 7){
    console.log(money);
    money--;
} */
/* const numsArr = [];
 */function linearSearch(num, arr){
    let found;
    for(let i =0; i < arr.length; i++){
        if(arr[i] === num){
            found = arr[i];
            break;
        }else{
            console.log("still looking");
        }
    }
    if(!found ){
        console.log("sorry i couldn't find that")
    }else{
        console.log(found);
    }
    console.log(found);
    return found;
 }
 linearSearch(5, [1,2,3,4,5,6,7,8,9,10]);