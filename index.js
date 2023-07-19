
var boxes = document.querySelectorAll(".grid-item");

var turn = "X";
var result = false;

var changeTurn = ()=>{
    return turn==="X"?"0":"X";
}

var count = 0;

var audio = document.getElementById("myAudio");
var audio1 = document.getElementById("myAudio1");


const checkWin = ()=>{
    const boxClass = document.querySelectorAll(".grid-item");
    let possibleWin = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    possibleWin.forEach(e=>{
        audio.play();
        if((boxClass[e[0]].innerText===boxClass[e[1]].innerText) && (boxClass[e[1]].innerText===boxClass[e[2]].innerText) && (boxClass[e[0]].innerText!=="")){
            if(boxClass[e[0]].innerText==="X"){
                audio1.play();
                alert("Congratulations! Player1 wins");
                result = true;

            }

            else{
                audio1.play();
                alert("Congratulations! Player2 wins");
                result = true;
                return;
            }
        }
    })
}




const checkDraw = ()=>{
    if(count===9 && result===false){
        alert("Draw!");
    }
}





Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", ()=>{
        if(boxtext.innerHTML === ""){
            boxtext.innerHTML = turn;
            count++;
            turn = changeTurn();
            checkWin();
            checkDraw();
        }
    })
})



var buttonReset = document.getElementById("button");
buttonReset.addEventListener("click", ()=>{
    var text = document.querySelectorAll(".boxtext");
    Array.from(text).forEach(e =>{
        e.innerText = "";
        
        count = 0;
    })
})












