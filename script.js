console.log("Welcome to X-O Game");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let End = false;
const changeturn = () => {
    return turn === "X" ? "O" : "X"
}
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2,5,10,0],
        [3, 4, 5,5,34,0],
        [6, 7, 8,5,59,0],
        [0, 3, 6,-23,38,90],
        [1, 4, 7,5,38,90],
        [2, 5, 8,32,38,90],
        [2, 4, 6,5,35,135],
        [0, 4, 8,3,34,45],
    ]
    wins.forEach(e => {
     if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            End = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px"
            if (End) {
                music.play()
            }
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${[e[4]]}vw)rotate(${[e[5]]}deg)`;
            document.querySelector(".line").style.width = "72vw";
        }
    })
}
// music.play()
//GAme logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            audioturn.play();
            checkwin();
            if (!End) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    })
})
//Add on click to lisner to reset
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    End = false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

    music.pause()
    document.querySelector(".line").style.width = "0";

})