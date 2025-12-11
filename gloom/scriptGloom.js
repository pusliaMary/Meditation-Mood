const btnOne = document.querySelector("#min15"); 
const btnTwo = document.querySelector("#min10"); 
const btnThree = document.querySelector("#min5");

const button = document.querySelector('#btn');
const par = document.querySelector('#par');


quotes = ["На мой взгляд, существует единственная форма человеческого падения - потеря цели",
    "Если не знаешь, надо не бояться, а узнавать",
    "Клянусь своей жизнью и любовью к ней , что никогда не буду жить ради другого человека и никогда не попрошу другого человека жить ради меня",
   "— Мой дорогой друг, кто вам позволит? — Это не главное. Главное — кто меня остановит?",
    "Нам дана возможность выбора, но не дано возможности избежать выбора",
    "Ум человека — основное орудие его выживания. Жизнь человеку дана, выживание — нет. Тело человеку дано, пища — нет. Мозг ему дан, но ум — нет",
    "...удовлетвориться работой, требующей от вас меньше, чем вы в состоянии дать, значит заглушить двигатель и приговорить себя к движению вниз..",
    "Я подскажу тебе. Противоречий не существует. Всякий раз, когда ты считаешь, что сталкиваешься с противоречием, проверь исходные положения. Ты обнаружишь, что одно из них ошибочно"]

    

button.addEventListener('click', (e)=>{
    e.preventDefault();

    let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

    par.textContent = randomQuote;

    par.style.display = "block";

})







btnOne.addEventListener("click", () => { 
    timer(15) 
}); 
btnTwo.addEventListener("click", () => { 
    timer(10) 
}); 
btnThree.addEventListener("click", () => { 
    timer(5) 
}); 

let amountTime = 0; 
let timerId; 

const audio = document.querySelector('#player'); 

function timer(time) { 
    amountTime = time * 60;
    stopTimer();  
    audio.muted = (audio.muted == false) ? true : false;

    function calculateTime() { 
           
              
        let minutes = Math.floor(amountTime / 60); 
        let seconds = amountTime % 60; 
        
    
        amountTime--; 
    
        if (amountTime < 0) { 
            stopTimer(); 
            amountTime = 0; 
        } 
    
        if (seconds < 10) { 
            seconds = "0" + seconds; 
        } 
    
        if (minutes < 10) { 
            minutes = "0" + minutes; 
        } 
        
        btnTwo.textContent = `${minutes} : ${seconds}`; 
        btnOne.style.display = 'none';
        btnThree.style.display = 'none';
        
    } 
        timerId = setInterval(calculateTime, 1000); 
} 

function stopTimer() { 
    clearInterval(timerId);
    audio.muted = (audio.muted == true) ? true : true;  
} 




