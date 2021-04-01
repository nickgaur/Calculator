// // row 1
// var left_bracket = document.querySelector("#left-bracket");
// var right_bracket = document.querySelector("#right-bracket");
// var C = document.querySelector("#C");
// var mod = document.querySelector("#mod");

// // row 2
// var seven = document.querySelector("#seven");
// var eight = document.querySelector("#eight");
// var nine = document.querySelector("#nine");
// var X = document.querySelector("#X");

// // row 3
// var four = document.querySelector("#four");
// var five = document.querySelector("#five");
// var six = document.querySelector("#six");
// var subtract = document.querySelector("#subtract");

// // row 4
// var one = document.querySelector("#one");
// var two = document.querySelector("#two");
// var three = document.querySelector("#three");
// var add = document.querySelector("#add");

// // row 5
// var zero = document.querySelector("#zero");
// var dot = document.querySelector("#dot");
// var divide = document.querySelector("#divide");
// var equal = document.querySelector("#equal");

var buttons = document.querySelectorAll("button");
var screen = document.querySelector("#screen");
var screenValue = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "X") {
        buttonText = "*";
        screenValue += buttonText;
        screen.value = screenValue;
    }
    else if(buttonText == "C"){
        screenValue = "";
        screen.value = screenValue;
    }
    else if(buttonText == "="){
        try{
            screen.value = eval(screenValue);
        }
        catch{
            screen.value = "ERROR";
        }
    }
    else {
        screenValue += buttonText;
        screen.value = screenValue;
    }
  });
}
