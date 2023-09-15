///// "Nå er jeg litt kjapp her! Det skjer jo stadig vekk!" -Terje /////

// Model
let kulometer = 1;

    let banan = 3
    let kaffe = 2
    let sjokkis = 1

const ting = [
    banan, kaffe, sjokkis, 
]
//let answer = 4;
const carImage = "car.png";

let isMusicPlaying = false;

let questionTime = 5;

let questions = ["hva er 2+2", "hva er 4+4", "hva er 5+5"];
let questionAnswers = ["4", "8", "10"];
let questionIndex = 0;

// View
updateView();

function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <nav>
        <ul>
            <li><img id="pika" src="pikaGunnar.png"></li>
            <li><a class="logo">Mojaffas Yaris</a></li>
            <li><a href="#">Kul-O-meter:</a></li>
            <div id="winOrLose"></div>
            <div id="kulDiv"></div>
            <audio id="backgroundMusic" loop>
            <source src="carsound.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            <button id="toggleButton" onclick="playMusic()">Play</button>
            </ul>
    </nav>

    <main>
         <div class="background"><img src="bilvei.png" alt="car road"></div>
         <div id="carImg"><img class="car" src="car.png" alt="car"></div>
         
        <div class="container">
        <input type="number" placeholder="insert answer here" > ${questions[questionIndex]}
        <button onclick="checkAnswer()">Enter</button>
        <div id="questionDiv"></div>
            <div id="answerDiv"><div>
        </div>
        
    </main>
   
    `;
    document.querySelector('#kulDiv').innerHTML = kulometer;
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

    //spill objektivet
function checkAnswer(){
    const answer = document.querySelector('input').value;
    if (answer == questionAnswers[questionIndex]){
       kulometer++;
       document.querySelector('#kulDiv').innerHTML = kulometer;
       updateKulometer();
       questionIndex++;
       if (questionIndex < questions.length) {
       updateView();
       }
       return document.querySelector('#answerDiv').innerHTML = "riktig svar!";
    }  else{ 
        kulometer --;
        document.querySelector('#kulDiv').innerHTML = kulometer;
        updateKulometer();
       return document.querySelector('#answerDiv').innerHTML = "Du er ikke noe Reodor Felgen i ihvertfall!";
    }
    } 

    
// failure state og win condition
function updateKulometer(){
  const winLose = document.querySelector('#winOrLose');  
 if (kulometer < 1){
  winLose.innerHTML = 'Du suger as...';
   console.log('You suck!')
    } 
    if (kulometer >= 2){
    console.log('you win')
    document.querySelector("#winOrLose").innerHTML = 'Du er den Ultimate Råtass!';
    document.querySelector("#carImg").innerHTML = '<img class="car" src="car2.png" alt="car">';
    }
       
}

