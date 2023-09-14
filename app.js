// Model
let kulometer = 1;
let hils = {
        hilsen1: "noe her",

    }
    let banan = 3
    let kaffe = 2
    let sjokkis = 1

const ting = [
    banan, kaffe, sjokkis, 
]
let answer = 2;

let isMusicPlaying = false;

let questionTime = 5;

let questions = ["hva er 2+2", "hva er 4+4", "hva er 5+5"];
let questionIndex = 0;

// View
updateView();

function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <nav>
        <ul>
            <li><a class="logo">Mojaffa Yaris</a></li>
            <li><a href="#">Kul-O-meter:</a></li>
            <div id="winOrLose"></div>
            <div id="kulDiv"></div>
            <audio id="backgroundMusic" loop>
            <source src="carsound.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            <button id="toggleButton" onclick="playMusic()">Play</button>
            </ul>
            <input type="number" placeholder="insert answer here" > ${questions[questionIndex]}
            <div id="questionDiv"></div>
            <div id="answerDiv"><div>
            <button onclick="firstAnswer()">Enter</button>
    </nav>

    <main>
         <div class="background"><img src="bilvei.png" alt="car road"></div>
        <img class="car" src="car2.png" alt="car">

        <div class="container"></div>
    </main>
   
    `;
//    document.querySelector('#kulDiv').innerHTML = kulometer
}

// Controller

function playMusic() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        isMusicPlaying = false;
        toggleButton.textContent = 'Play';
        console.log('Music paused'); 
    } else {
        backgroundMusic.play();
        isMusicPlaying = true;
        toggleButton.textContent = 'Pause';
        console.log('Music played'); 
    }
};

//const timeInterval = setInterval(questionTime, 5000); 


    //spill objektivet
function firstAnswer(){
    if (answer == 4){
       kulometer++;
       document.querySelector('#kulDiv').innerHTML = kulometer;
       updateKulometer();
       return document.querySelector('#answerDiv').innerHTML = "riktig svar!";
    }  else{ 
        kulometer --;
        document.querySelector('#kulDiv').innerHTML = kulometer;
        updateKulometer();
       return document.querySelector('#answerDiv').innerHTML = "feil svar!";
    }
    } 
function secondAnswer(){
        if (answer == 2){
           kulometer+=2;
           document.querySelector('#kulDiv').innerHTML = kulometer;
           updateKulometer();
           return document.querySelector('#answerDiv').innerHTML = "riktig svar!";
        }  else{ 
            kulometer -=2;
            document.querySelector('#kulDiv').innerHTML = kulometer;
            updateKulometer();
           return document.querySelector('#answerDiv').innerHTML = "feil svar!";
        }
        } 
        
       
  function answerCheck(noeAnnet){
       answer = noeAnnet
         }

    // tjene og miste kulometer
 function bananaPower(){
    kulometer += 3
    updateView();
   }
   
    updateView();
   function coffeePower(){
   updateView();    
   kulometer += 2
   }
   
   function chocolatePower(){
   kulometer ++;
   updateView();    
   }

// failure state og win condition
function updateKulometer(){
  const winLose = document.querySelector('#winOrLose');  
 if (kulometer < 1){
  winLose.innerHTML = 'Du suger as...';
   console.log('You suck!')
    } 
    if (kulometer > 9){
    console.log('you win')
    document.querySelector("#winOrLose").innerHTML = 'Du er den Ultimate Råtass!';
    }


console.log(kulometer);}