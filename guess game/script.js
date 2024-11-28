let computerGuess;
let userGuess = [];
let userGuessupdate = document.getElementById("textOutput");
let userNumberupdate = document.getElementById("inputBox");
let audio = new Audio('game audio.wav');

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    document.getElementById("NewGameButton").style.display = "none";
    document.getElementById("GameArea").style.display = "none";
};

const startGame = () => {
    document.getElementById("WelcomeScreen").style.display = "none";
    document.getElementById("GameArea").style.display = "block";
};
    
    // reload the page

const NewGameBegin = () => {
    audio.play();
    window.location.reload();
}

//   start new game 

const startNewGame = () => {
    document.getElementById("NewGameButton").style.display = "inline";
    userNumberupdate.setAttribute("disabled", true);
}


const compareGuess = () => {
    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("Guesses").innerHTML = userGuess;


    // check the value low or high

    if (userGuess.length < maxGuess) {
    if(userNumber > computerGuess) {
        userGuessupdate.innerHTML = "Your guess is High";
        userNumberupdate.value = "";
    } else if(userNumber < computerGuess) {
        userGuessupdate.innerHTML = "Your guess is Low";
        userNumberupdate.value = "";
    } else {
        userGuessupdate.innerHTML = "It's Correct";
        userNumberupdate.value = "";
        startNewGame(); 
    }
} else {
    if(userNumber > computerGuess) {
        userGuessupdate.innerHTML = `You Loose!! correct number was ${computerGuess} `;
        userNumberupdate.value = "";
        startNewGame(); 
    } else if(userNumber < computerGuess) {
        userGuessupdate.innerHTML = `You Loose!! correct number was ${computerGuess} `;
        userNumberupdate.value = "";
        startNewGame(); 
    } else {
        userGuessupdate.innerHTML = "It's Correct";
        userNumberupdate.value = "";
        startNewGame(); 
    }
}

    document.getElementById("attempts").innerHTML = userGuess.length;

};


const easyMode = () => {
    audio.play();
    maxGuess = 10;
    startGame();
};

const hardMode = () => {
    audio.play();
    maxGuess = 5;
    startGame();
};


