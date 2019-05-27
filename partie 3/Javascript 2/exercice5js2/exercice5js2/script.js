// Déclaration de la fonction avec deux parametres
function changeImg(img, that) {
    var file = "images/" + img;
    document.getElementById(that).src = file;
}