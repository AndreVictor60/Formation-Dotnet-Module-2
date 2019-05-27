$(document).ready(function () {
    // Cache la divVictory
    $('#divVictory').hide();
    // Déclaration des variables
    var numberTry = 0;
    // Saisit un entier aléatoire compris entre 0 et 100
    var numberWin = Math.floor(Math.random() * 101);
    // regexNumber autorise les nombres entre 0 et 100
    var regexNumber = new RegExp('^[0-9][0-9]?$|^100$');
    console.log(numberWin);
    // Lors du clique sur le btn
    $('#verifBtn').click(function () {
        // Recuperer la valeur saisit par utilisateur
        var numberUser = $('#valueUser').val();
        // Vérification de la saisie de utilisateur par rapport a la regex
        if (regexNumber.test(numberUser)) {
            // Si le nombre de utilisateur est égal au nombre gagnant
            if (numberUser == numberWin) {
                // Supprimer le formulaire
                $('#formGame').remove();
                // Afficher la div victory
                $('#divVictory').show();
                // Affiche l'image avec une animation de fadeIn 
                $('#imgVictory').fadeIn(5000);
                // Ajout du texte afin de savoir le nombre d'essai de utilisateur
                $('#textVictory').text('Vous avez réussi en ' + numberTry + ' fois.');
            } else if (numberUser < numberWin) {
                // Ajout du texte Plus
                $('#indice').text('Plus !!');
                // Ajout de la couleur rouge sur le texte Plus
                $('#indice').css('color', 'red');
                // Incrémentation de numberTry afin d'avoir le nombre essai de utilisateur
                numberTry++;
            } else {
                // Effectuer le même systéme que le PLUS
                $('#indice').text('Moins !!');
                $('#indice').css('color', 'blue');
                numberTry++;
            }
        } else {
            alert('Saisir une valeur entre 0 et 100 !');
        }
        // Afficher le nombre d'essai de utilisateur
        $('span').text(numberTry);
    })
}); 