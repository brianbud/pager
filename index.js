let pagerDisplay = document.getElementById("pager-num-display")
let phoneDisplay = document.getElementById("phone-num-display")
let output = ""
let audio = new Audio('./assets/pager.wav');
output.className = "number-display"

function showNumbers(num){
    output += num
    phoneDisplay.innerText += num 
    errorMsg()
}

function reset(){
    output = ""
    phoneDisplay.innerText = output
    pagerDisplay.innerText = output
}

function sendNum(){
    setTimeout(() => {
    pagerDisplay.innerText = output;
    audio.play()
    }, "1000")
}

function addStar(){
    output += "*"
    phoneDisplay.innerText += "*"
    errorMsg()
}

function addNumSign(){
    output += "#"
    phoneDisplay.innerText += "#"
    errorMsg()
}

function errorMsg(){
    if(output.length > 10){
       phoneDisplay.innerText = "limit exceeded" 
    }
}