const container=document.getElementById('root');
console.log(container);
const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'green',backgroundColor:'yellow'}},'Welcome to React App Development');
const h1=React.createElement('h1',{style:{color:'blue',backgroundColor:'lightpink'}},'ABES ENGINEERING COLLEGE');
const img=React.createElement('img',{src:'hiii.webp',alt:'Description of image',style:{height:'200px',width:'200px'}});
//const div=React.createElement('div',{style:{backgroundColor:'lightgray',border:'1px solid black'}},h1,h2,img);
const h21=<h2>Hello World</h2>
const h22=<h2>ABES Engineering College</h2>
const div=<div>{h21}{h22}</div>
const wrapper=<div style={{border:'2px solid black'}}>
    {div}
    <h2>Hey using JSX</h2>
    </div>
root.render(wrapper);
