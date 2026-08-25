/*nsole.log("One");
for(i=0;i<10000;i++){
    console.log("i+="+i);
}
//tTimeout()=>{console.log("Two")},1000)
console.log("Three");
*/
function ping(){
    container.innerHTML='<h2>Welcome to DOM</h2>';
   
    }
const container=document.getElementById("root");
const btn=document.getElementById("btn");
const h1=document.createElement("h1");
console.log(h1);
h1.innerText="ABES Engineering College";
container.appendChild(h1);
btn.addEventListener("click",ping);