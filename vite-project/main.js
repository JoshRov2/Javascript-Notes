//go get latvian basketball data
//show latvian basketball data

/* function greet(name){
  const greetPromise = new Promise(function(resolve, reject){
    resolve(`Hello ${name}`);
  });
  return greetPromise;
}
const Aaron = greet("Aaron")
console,log(Aaron);
Aaron.then((result)=>{
  console.log(result);
}); */

//REST API
const URL = `https://moviequote.onrender.com/`;
async function getData(URL){
  try {
    const response = await fetch(URL);
   /*  if(response.status != 200){
      throw new Error(response.statusText);
    }
    console.log(response);   */  
    const data = await response.json();
    console.log(data)
    document.querySelector("h1").textContent = data.content;
    document.querySelector("h2").textContent = data.content;
  } catch (error) {
    // document.querySelector("h1").textContent = error;
  }
};
getData(URL);

const dennis = {
  name: "Dennis", //string
  age: 16, //integer
};
let x = Array.from(dennis.name);
console.log(x);
for(let i = 0; i< dennis.name.length; i++){
  console.log(dennis.name[i]);
}
console.log(12 + Number("13"))//string, add number to operate
console.log(dennis.name);

function needle(name, search){
  if(name.includes(search)){
    return true;
  }else{
    return false;
  }
}
console.log(needle(dennis.name, "d"));

function sortString(name){
  let x = [...name].sort();
  console.log(x)
}
sortString("QWERTYUIOPASDFGHJKLZXCVBNM");
let a = [1, 2, 3];
let y = [4, 5, 6];
let z = {...a, ...y};
a = [...a, ...y]
console.log(z);

function removeL(name) {
  let x = Array.from(name);
  x.splice(-1);
  console.log(x);
}