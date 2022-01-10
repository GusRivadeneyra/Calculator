let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');

//Calculator Display
let realTimeScreenValue = []

// To Clear

clearbtn.addEventListener("click", () => {

    realTimeScreenValue= [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answer Screen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

//Get value of any button clicked and display to the screen

buttons.forEach((btn) => {
    if(!btn.id.match('erase')) {
        ReadableStream.push(btn.value)
    }
})



