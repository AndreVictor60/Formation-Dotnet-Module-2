// Création de la fonction validatePassword
function validatePassword() {
    // Déclaration des variables
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    // Vérification si les deux passwords sont identiques
    if (password == confirmPassword) {
        // Ajout du border green
        document.getElementById('password').style.border = '2px solid green';
        document.getElementById('confirmPassword').style.border = '2px solid green';
    } else {
        // Ajout du border red
        document.getElementById('password').style.border = '2px solid red';
        document.getElementById('confirmPassword').style.border = '2px solid red';
    }
}