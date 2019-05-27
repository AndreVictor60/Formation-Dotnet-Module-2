// Déclaration de la fonction avec deux parametres (nouvelle image et id de la balise)
function changeImg(img, that) {
    var file = "images/" + img;
    document.getElementById(that).src = file;
}