const display = document.getElementById("display");

/* ADD VALUE */

function appendValue(value){

    display.value += value;

}

/* CLEAR DISPLAY */

function clearDisplay(){

    display.value = "";

}

/* DELETE LAST CHARACTER */

function deleteLast(){

    display.value = display.value.slice(0, -1);

}

/* CALCULATE RESULT */

function calculateResult(){

    try{

        display.value = eval(display.value);

    }

    catch(error){

        display.value = "Error";

    }

}

/* KEYBOARD SUPPORT */

document.addEventListener("keydown", (event) => {

    const key = event.key;

    if(
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ){

        appendValue(key);

    }

    else if(key === "Enter"){

        calculateResult();

    }

    else if(key === "Backspace"){

        deleteLast();

    }

    else if(key === "Escape"){

        clearDisplay();

    }

});