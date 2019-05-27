var result = 0;
var isNaNNumber1 = true;
var isNaNNumber2 = true;

while (isNaNNumber1) {
    var number1 = prompt("Veuillez saisir un nombre à virgule ");
    if (isNaN(number1)) {
        isNaNNumber1 = true;
    } else {
        isNaNNumber1 = false
    }
}
while (isNaNNumber2) {
    var number2 = prompt("Veuillez saisir un deuxieme nombre à virgule ");
    if (isNaN(number2)) {
        isNaNNumber2 = true;
    } else {
        isNaNNumber2 = false
    }
}
number1 = Math.trunc(number1);
result = number1 * number2;
alert("Votre résultat de "+ number1 +" multiplier par "+ number2 +" est : " + result);