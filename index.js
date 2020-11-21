var counter1=0;
var counter2=0;
var newGameButton=document.querySelector("#newGame");
newGameButton.addEventListener("click",pressingNewGame);
function pressingNewGame() {
   document.getElementById("noneDisplay").style.display="block";  
   document.getElementById("topHeading").innerHTML="PRESS THE PLAY BUTTON TO PLAY!!";
   document.getElementById("newGame").style.display="none";
   counter1=0;
   counter2=0;
   document.querySelector("#player1Counter").innerHTML=counter1;
    document.querySelector("#player2Counter").innerHTML=counter2;
    document.querySelector("#player1head").innerHTML="PLAYER-1";
    document.querySelector("#player2head").innerHTML="PLAYER-2";
}




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
        document.querySelector("#player1head").innerHTML="PLAYER-1 WINS";
        document.querySelector("#player2head").innerHTML="PLAYER-2";
        counter1+=1;
        document.querySelector("#player1Counter").innerHTML=counter1;
        if(counter1===10){
            document.getElementById("noneDisplay").style.display="none";  
            document.getElementById("topHeading").innerHTML="PLAYER-1 WINS </br> PLAY AGAIN";
            document.getElementById("newGame").style.display="block";
            
        }
    }
    else if((randomNumber1===3&&randomNumber2===1)||(randomNumber1===1&&randomNumber2===2)||(randomNumber1===2&&randomNumber2===3)){
        document.querySelector("#player2head").innerHTML="PLAYER-2 WINS";
        document.querySelector("#player1head").innerHTML="PLAYER-1";
        counter2+=1;
    document.querySelector("#player2Counter").innerHTML=counter2;

        if(counter2===10){
            document.getElementById("noneDisplay").style.display="none";  
            document.getElementById("topHeading").innerHTML="PLAYER-2 WINS </br> PLAY AGAIN";
            document.getElementById("newGame").style.display="block";
            
        }

    }
    else{
        document.querySelector("#player1head").innerHTML="DRAW! PLAY AGAIN";
        document.querySelector("#player2head").innerHTML="DRAW! PLAY AGAIN";

    }
    
}

 


