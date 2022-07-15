let body= document.querySelector("body");
let h1= document.querySelector('h1');
let count=0;
body.addEventListener( 'mouseover' ,function(e){
    count++;
    h1.innerText=`${count}`;
    const newDiv= document.createElement('div');
    newDiv.classList.add('circle');
    newDiv.style.position= "absolute";
    newDiv.style.top=`${e.y-30}px`;
    newDiv.style.left=`${e.x-30}px`;
    let r= Math.floor(Math.random()*255+1);
    let g= Math.floor(Math.random()*255+1);
    let b= Math.floor(Math.random()*255+1);
    let color=`rgb(${r} , ${g}, ${b})`;
    newDiv.style.backgroundColor=color;
    body.append(newDiv);
})

function action(e)
{

}
body.addEventListener('click',function(e){
    
    const div=document.createElement('div');
    div.classList.add('coordinate');
   
    div.style.top=`${e.y-30}px`;
    div.style.left=`${e.x-30}px`;
    div.innerText=`${e.x},${e.y}`;
    div.style.color="white";
    
    body.append(div);
    div.addEventListener('mouseout', function(){
        div.remove();
    })
    
})
