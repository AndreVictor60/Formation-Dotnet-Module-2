//Déclaration de la variable
var finish = true;
// Boucle pour recommencer la saisit en cas erreur
while (finish) {
    // Enregistre la saisit de utilisateur dans la variable name
    var name = prompt("Saisir votre prénom");
    // On récupere la longueur de la chaine de caractere et on fait une condition afin de savoir si utilisateur a saisit
    if (name.length != 0) {
        // Affichage de l'alerte
        alert("Bonjour " + name);
        // Défini finish faux
        var finish = false;
    } else {
        // Défini finish vrai
        var finish = true;
    }
}