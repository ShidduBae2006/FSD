const root=document.getElementById('container');
const button=document.getElementById('btn');
const disp=document.getElementById('disp');
const loader=document.getElementById('loader')
async function fetchData(){
    const serverData=await fetch('https://fakestoreapi.com/products');
    const jsondata=await serverData.json();
    
   try{
    //console.log(jsondata[0].rating);
    /*loader.innerHTML="<h2 style=color:red;>Data is loading...</h2>";
    disp.innerHTML=`${jsondata[0].title}`;*/
    let table=`<table border=2px>
        ${
            jsondata.map((ele)=>(
               `<tr>
                <td><img src=${ele.image} height=200 width=300></img></td>
                <td>${ele.title}</td>
                <td>${ele.description}</td>
                <td>${ele.price}</td>
                <td>${ele.category}</td>
               </tr>`
            ))
        }
    </table>`;
    disp.innerHTML=table;
    }
    catch(e){
    console.log("Error:"+e);
   }   
   finally{
    
   }
   }   
   
   
button.addEventListener('click',fetchData);