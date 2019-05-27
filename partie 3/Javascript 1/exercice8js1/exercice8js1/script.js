// Déclaration de la fonction ageMajor
function ageMajor() {
    // Déclaration de la variable
    var age = document.getElementById("age").value;
    // Vérification si il s'agit bien d'un nombre
    if (isNaN(age) != true) {
        // Si age compris entre 0 et 120
        if (age > 0 && age < 120) {
            // Si l'age supérieur ou égal a 18
            if (age >= 18) {
                alert("Vous êtes majeur");
            } else {
                alert("Vous êtes mineur");
            }
        } else {
            alert("Veuillez saisir une age valable");
        }
    } else {
        alert("Une erreur s'est produite, veuillez réessayer");
    }
}