const root=document.getElementById("root");
const btn=document.getElementById("btn");
const image=document.createElement("img");
const h1=document.createElement('h1');
console.log(h1);
h1.innerText='ABES Ghaziabad';
const loader=document.createElement("h2");
console.log(loader);
const img=document.createElement('img');
function giveResume(){
     try{
         root.innerHTML='<h2>Name:Shraddha Shandilya </h2>' +
        '<h2>College:ABES Engineering College</h2>' +
        '<h2>Branch:Computer Science</h2>' +
        '<h2>Year:2024-02</h2>';
         img.src="./mydp.jpg";
         img.setAttribute('height',200);
         img.setAttribute('width',200);
         root.appendChild(img);
         loader.innerText="loading...";
         root.appendChild(loader);
        h1.style.backgroundColor='cyan';
        h1.style.color='red';
        root.appendChild(h1);
         
     }
     catch(e){
        loader.innerHTML='<h2>Something went wrong</h2>';
     }
     finally{
         root.removeChild(loader);
         
     }
   

}
     btn.addEventListener("click",giveResume);
