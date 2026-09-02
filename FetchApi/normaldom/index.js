const root=document.getElementById('container');
const button=document.getElementById('btn');
console.log(root)
const h2=document.createElement('h2');
const img=document.createElement('img');
const div=document.createElement('div');
 root.appendChild(button);

try{
function showData(){
   
    h2.innerText='Welcome to DOM';
    h2.style.color='red';
    h2.style.textDecoration='underline';
    h2.style.backgroundColor='cyan';
    img.src="hiii.webp";
    img.setAttribute('height',200);
    img.setAttribute('width',200);
    div.style.border='solid green 2px';
    div.appendChild(h2);
    div.appendChild(img);
    root.appendChild(div);
   root.appendChild(button);
    
   

}
}
catch(e){

}
finally{
     root.removeChild(button);
}
button.addEventListener('click',showData);

