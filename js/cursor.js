
//Custom cursor

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
 
      cursor.setAttribute("style","top: "+(e.pageY-10)+"px; left: "+(e.pageX-10)+"px;")
})

document.addEventListener('click' ,() => {
    cursor.classList.add("expand"); 

    setTimeout(() =>{
    cursor.classList.remove("expand");
  }, 500)
}) 


//Text reveal 

const text = baffle(".data");
text.set({
    speed : 120,
    characters : '█▓< ▓▓>░> ░░<▒▒ /█░ █▒<▒░ /▒░▒ ▓▒░ ▒░▒/ ▓█'
});
text.start();
text.reveal(10000);

