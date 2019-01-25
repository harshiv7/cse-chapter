$(document).ready(function() {
    var counter = 0 ;
    var c = 0;
    var i = setInterval(function(){
        $(".loadingPage .counter h1").html(c);
        $(".loadingPage").css("width" ,c + "%" );

        counter++;
        c++;
        if(counter == 101){
            clearInterval(i);
        }
    }, 50);
    $(".loadingPage").fadeOut(6000, function(){ 
        $(".loadingPage").remove();
        $(".container").remove();
     } );
});
//text reveal
const text = baffle(".data");
text.set({
    speed : 120,
    characters : '█▓< ▓▓>░> ░░<▒▒ /█░ █▒<▒░ /▒░▒ ▓▒░ ▒░▒/ ▓█'
});

text.start();
text.reveal(1000);