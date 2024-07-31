// Conditional (ternary) operator
// example
// condition ? expr1 : expr2;

function isUserValid(bool){
    return bool;
}

var answer = isUserValid(true) ? "you may enter": "Access denied";

var automatedAnswer = 
    "Your account # is" + ( isUserValid(false) ? "1234" : " not available");
    
function condition() {
    if(isUserValid(true)) {
        return "you may enter"
    } else {
        return "access denied"
    }
}

var answer2 = condition();


