
//innerText ->>TO change the inner text

let title=document.getElementById('title');
console.log(title.innerText);
title.innerText='Good Bye!!';


//innerHTML-->To Change the inner html

let message='love you javascript';
title.innerHTML=`i love ${message} world`;

title.style.color='blue';
title.style.backgroundColor='orange';

///redyellow game

let redDiv=document.getElementById('red');
let yellowDiv=document.getElementById('yellow');
let oraDiv=document.getElementById('orange');

//onclick
// redDiv.onclick = ()=> console.log('Boom Its  Red');
// yellowDiv.onclick =()=> console.log('Boom its Yellow');
// oraDiv.onclick= () =>console.log('Boom its Orange');

const sq=document.querySelectorAll('.clickButton');
///console.log(sq);


// console.log(sq[0].value);
// console.log(sq[1].value);
// console.log(sq[2].value);
//instead use foreach

//foreach
//times clicked
const timeclick={'red':0,'yellow':0,'orange':0}


sq.forEach (squa => {
    squa.onclick=()=>{
        timeclick[squa.value]+=1;
        squa.innerText=timeclick[squa.value];
        // console.log(squa.value);
    }
});
//for clearing the above scores

function clearscr(){
    sq.forEach(squa=>squa.innerText='');
}
const cleargame=document.getElementById('empty');
cleargame.onclick = ()=>clearscr();



