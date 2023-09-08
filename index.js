let num1 = 0;
let num2 = 0;
let simbro = ["+", "-", "x", "/"];
let quiz = 0;
let count = 0;
let score = 0;

function open(){
    num1 = Math.floor(Math.random()*9+1);
    num2 = Math.floor(Math.random()*9+1);
    quiz = Math.floor(Math.random()*4);
    document.getElementById("quiz").innerHTML =
    "<p>"+num1+simbro[quiz]+num2+
    " = <input id = \"answer\"></p>"
}
function newquiz(){
    let answer = document.getElementById("answer").value
    if(quiz == 0){
        if(answer == num1+num2){
            score++
        }
        count++
    }
    if (quiz == 1){
        if(answer == num1-+num2){
            score++
        }
        count++
    }
    if (quiz == 2){
        if(answer == num1num2){
            score++
        } 
        count++
    }
    if (quiz == 3){
        if(answer == Math.floor(num1/num2*1000)/1000){
            score++
        }
        count++
    }
    makescore();
    open();
}
function makescore(){
    document.getElementById("score").innerHTML = "<p>Your score is "+score+" / "+count+"</p>"
}



















