// Création de la fonction modulo
function modulo() {
    // Déclaration des variables 
    var result = 0;
    var number1 = document.getElementById("firstNumber").value;
    var number2 = document.getElementById("secondNumber").value;
    // Vérification des nombres
    if (isNaN(number1) != true && isNaN(number2) != true) {
        // Calcul modulo
        result = number1 % number2;
        alert("Le reste de la divison de " + number1 + " par " + number2 + " est de " + result);
    } else {
        alert("Une erreur s'est produite, veuillez réessayer");
    }
};