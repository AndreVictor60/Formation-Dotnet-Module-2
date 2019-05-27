// Déclaration de la fonction changeImg avec un parametre
function changeImg(img) {
    // Déclaration de la variable afin d'avoir le chemin exacte
    var fileImg = "images/" + img;
    // Modification de la source de element par la nouvelle source
    document.getElementById('image1').src = fileImg;
}