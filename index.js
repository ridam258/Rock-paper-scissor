var playButton=document.querySelector(".play");
playButton.addEventListener("click",mainGame);

function mainGame() {
    var image1=document.querySelector("#pic1");
    var randomNumber1=(Math.floor(Math.random()*3))+1;
    var randomImage1="pic"+randomNumber1+".png";
    image1.setAttribute("src",randomImage1);
    var image2=document.querySelector("#pic2");
    var randomNumber2=(Math.floor(Math.random()*3))+1;
var randomImage2="pic"+randomNumber2+".png";
    image2.setAttribute("src",randomImage2);



    if((randomNumber1===1&&randomNumber2===3)||(randomNumber1===2&&randomNumber2===1)||(randomNumber1===3&&randomNumber2===2)){
        document.querySelector("h1").innerHTML="PLAYER-1 WINS";
    }
    else if((randomNumber1===3&&randomNumber2===1)||(randomNumber1===1&&randomNumber2===2)||(randomNumber1===2&&randomNumber2===3)){
        document.querySelector("h1").innerHTML="PLAYER-2 WINS";
    }
    else{
        document.querySelector("h1").innerHTML="DRAW! PLAY AGAIN";
    }
}
 


