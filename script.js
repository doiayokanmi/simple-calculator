function multiply() {
    var x = Number(document.getElementById('firstValue').value);
    var y = Number(document.getElementById('secondValue').value);

    if (x == "" || y == "") {
        document.getElementById('answer').innerHTML = "Invalid input, enter a number in both box";
    }

    else {
        document.getElementById('answer').innerHTML = x * y;
    }
}

function add() {
    var x = Number(document.getElementById('firstValue').value);
    var y = Number(document.getElementById('secondValue').value);

    if (x == "" || y == "") {
        document.getElementById('answer').innerHTML = "Invalid input, enter a number in both box";
    }

    else {
        document.getElementById('answer').innerHTML = x + y;
    }
}

function substract() {
    var x = Number(document.getElementById('firstValue').value);
    var y = Number(document.getElementById('secondValue').value);

    if (x == "" || y == "") {
        document.getElementById('answer').innerHTML = "Invalid input, enter a number in both box";
    }

    else {
        document.getElementById('answer').innerHTML = x - y;
    }
}

function divide() {
    var x = Number(document.getElementById('firstValue').value);
    var y = Number(document.getElementById('secondValue').value);

    if (x == "" || y == "") {
        document.getElementById('answer').innerHTML = "Invalid input, enter a number in both box";
    }

    else {
        document.getElementById('answer').innerHTML = x / y;
    }
}