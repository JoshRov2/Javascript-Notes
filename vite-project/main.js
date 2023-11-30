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
const URL = `https://api.quotable.io/random`;
async function getData(URL){
  try {
    const response = await fetch(URL);
    console.log(response);
    const data = await response.json();
    console.log(data)
    document.querySelector("h1").textContent = data.content;
    document.querySelector("h2").textContent = data.content;
  } catch (error) {}
};
getData(URL);