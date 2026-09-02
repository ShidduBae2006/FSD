const container=document.getElementById('root');
console.log(container);
const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'green',backgroundColor:'yellow'}},'Welcome to React App Development');
root.render(h2);