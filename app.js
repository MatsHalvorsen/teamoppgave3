// Model
let kulometer = 7
let hils = {
        hilsen1: "noe her",

    }
    let banan = 3
    let kaffe = 2
    let sjokkis = 1

const ting = [
    banan, kaffe, sjokkis, 
]
let answer = 2

// View
updateView()

function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/  `
    <nav>
        <ul>
            <li><a class="logo">Mojaffa Yaris</a></li>
            <li><a href="#">Kul-O-meter</a></li>
            <li><a href="#">🤓-----😎</a></li>
            <div id="winOrLose"></div>
            <div id="tingDiv">BANANA: </div>
            <div id="kulDiv"></div>
            <button onclick="bananaPower()">banana power</button>
            <audio id="backgroundMusic" loop>
            <source src="carsound.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            <button id="toggleButton">Play</button>
            </ul>
            <input type="number" placeholder="insert answer here" onchange="answerCheck(this.value)"> hva er 2+2
            <button onclick="firstAnswer"()>Enter</button>
    </nav>

    <main>
         <div class="background"><img src="bilvei.png" alt="car road"></div>
        <img class="car" src="car2.png" alt="car">

         
    </main>
   
    `;
    document.querySelector('#kulDiv').innerHTML = kulometer
}


// Controller
let isMusicPlaying = false;

toggleButton.addEventListener('click', () => {
    console.log('Toggle button clicked'); 

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
});

    //spill objektivet
function firstAnswer(){
    if (answer == 4){
       kulometer ++
       return 'riktig svar!';
       kulometer --
    }
    }
    function answerCheck(noeAnnet){answer = noeAnnet}

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
 if (kulometer < 1){
  console.log('You suck!')
  winOrLose.innerHTML = 'Du suger as...';
  
} 
if (kulometer > 9){
console.log('you win')
winOrLose.innerHTML = 'Du er den Ultimate Råtass!';
}

console.log(kulometer);