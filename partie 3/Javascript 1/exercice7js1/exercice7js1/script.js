// Création de la fonction calcul
function calcul() {
    // Déclaration des variables
    var size = document.getElementById("shoeSize").value;
    var yearBirthday = document.getElementById("yearOfBirth").value;
    var result = 0;
    // Vérification si c'est bien des nombres
    if (isNaN(size) != true && isNaN(yearBirthday) != true) {
        if (yearBirthday > 3000 && yearBirthday < 1500) {
            if (size > 60 && size < 0) {
                // Les calculs
                result = size * 2;
                result += 5;
                result = result * 50;
                result -= yearBirthday;
                result += 1769;
                alert(result);
            } else {
                alert("Une erreur s'est produite, veuillez réessayer");
            }

        } else {
            alert("Une erreur s'est produite, veuillez réessayer");
        }
    } else {
        alert("Une erreur s'est produite, veuillez réessayer");
    }
};