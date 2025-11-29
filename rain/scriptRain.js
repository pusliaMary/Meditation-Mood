const btnOne = document.querySelector("#min15"); 
const btnTwo = document.querySelector("#min10"); 
const btnThree = document.querySelector("#min5");

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

