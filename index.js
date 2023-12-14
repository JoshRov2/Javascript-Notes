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

// for(i =0; i <= 7; i++){
//     console.log(i)
// }
// /* while(money < 7){
//     console.log(money);
//     money--;
// } */
// /* const numsArr = [];
//  */function linearSearch(num, arr){
//     let found;
//     //for loop is iteration
//     for(let i =0; i < arr.length; i++){
//         //evaluations if statements, are selection
//         if(arr[i] === num){
//             found = arr[i];
//             break;
//         }else{
//             console.log("still looking");
//         }
//     }
//     if(!found ){
//         console.log("sorry i couldn't find that")
//     }else{
//         console.log(found);
//     }
//     console.log(found);
//     return found;
//  }
//  linearSearch(5, [1,2,3,4,5,6,7,8,9,10]);



//PRACTICE
/* define the amount of occupied spaces through a let or const, as N. N is the total amount of parking spaces.
 */
// "C" is an occupied space.
// // "." is an empty s/* pace.
// let y = "[C][C][.][C][.][C]"
// let t = "[C][.][.][.[C][C]"
// function spaces(s, y, t){
//     let total = 0;
//     for(let i = 0; i <= s; i++){
//         if(y[i] === "C" && t[i] === "C"){
//             total++;
//         }
//     }
//     console.log(total);
// } */
// spaces(7, "CCCCCCC", "C.C.C.C");
// N represents the amount of spaces available yesterday and today, so it will be used twice.
let prev = 0;
let current = 1;
function fibo(prev, current, next){
    for (let i = 2; i <= prev; i++){
            next = current + prev;
            prev = current;
            current = next;
            console.log(current);
        }
    }
return(current);