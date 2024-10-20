
function generateString() {
    var inputField = document.getElementById('UserInput');

    if (inputField.checkValidity()) {
        var value = String(inputField.value)
        
        var stringToRepeat =  value.slice(-3);
        
        var result = stringToRepeat+value+stringToRepeat;
        document.getElementById("result").innerHTML=result;
    } else {
        document.getElementById('result').innerText = inputField.validationMessage;
        document.getElementById('result').style.color = "red";
    }
}

