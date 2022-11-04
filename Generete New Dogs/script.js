//'https://dog.ceo/api/breeds/image/random'

const dogdiv=document.getElementById('dogimg');
const newdog=document.getElementById('newdog');
const getnewdog =()=>{
fetch('https://dog.ceo/api/breeds/image/random')
   .then(response=>response.json())
   .then(json=>{
    console.log(json.message); 
    dogdiv.innerHTML=`<img src='${json.message}'heigth=500 width=500 />`
   });
}
newdog.onclick = () =>getnewdog();
console.log("3rd");