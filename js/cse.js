function fadeOut(){
            
    TweenMax.to(".myBtn", 1,{
        y:-100,
        opacity : 0
    });

    TweenMax.to(".screen", 2,{
        y:-400,
        opacity : 0,
        ease : Power2.easeInOut,
        delay : 0.5 
    });

    TweenMax.from(".overlay", 2, {
        ease : Power2.easeInOut
    });
    
    TweenMax.to(".overlay", 2, {
        delay: 1.2,
        top: "-110%",
        ease : Power2.easeInOut
    });
    
    TweenMax.to(".overlay-2", 2, {
        delay: 1.6,
        top: "-110%",
        ease : Expo.easeInOut
    });

    TweenMax.from(".content", 2, {
        delay: 2,
        opacity:0,
        ease : Power2.easeInOut
    });

    TweenMax.to(".overlay-2", 2, {
        opacity :1,
        y:-300,
        delay : 2.2 ,
        ease : Power2.easeInOut
    });
}

//Text Revel

const text = baffle(".screen");
text.set({
    speed : 120,
    characters : '█▓< ▓▓>░> ░░<▒▒ /█░ █▒<▒░ /▒░▒ ▓▒░ ▒░▒/ ▓█'
});


text.start();
text.reveal(10000);