$(document).ready(function () {
    // Déclaration des variables
    var win = 0, lost = 0, draw = 0, game = 0;
    // Fonction pour désactiver le formulaire
    function disabledFormTrue() {
        $('input[name=shifumi]').prop('disabled', true);
        $('#submit').prop('disabled', true);
    }
    // Fonction pour activer le formulaire
    function disabledFormFalse() {
        $('input[name=shifumi]').prop('disabled', false);
        $('#submit').prop('disabled', false);
    }
    // Lors d'un click sur input
    $('input[name=shifumi]').click(function () {
        // Récuperer la valeur de input clique par utilisateur
        var pickUser = $(this).val();
        // Affichage de l'image par rapport au choix de utilisateur
        if (pickUser == 1) {
            $('#chooseUser').attr('src', 'Images/stone.svg');
        } else if (pickUser == 2) {
            $('#chooseUser').attr('src', 'Images/sheet.svg');
        } else if (pickUser == 3) {
            $('#chooseUser').attr('src', 'Images/scissors.svg');
        } else {
            $('#chooseUser').attr('src', 'Images/question.svg');
        }
    });
    // Fonction qui sert a rejoue au clique sur bouton rejoue
    $('#replay').click(function () {
        disabledFormFalse();
        $('#chooseComputer').attr('src', 'Images/question.svg');
        $('#scoreName').empty();
    });
    // Fonction qui sert a valide le choix de utilisateur au clique du bouton valider
    $('#submit').click(function () {
        // Récuperer la valeur de input selectionner par utilisateur
        var chooseUser = $('input[name=shifumi]:checked').val();
        // Chiffre aléatoire entre 1 et 3 pour le choix de l'ordinateur
        var chooseComputer = Math.floor(Math.random() * 3 + 1);
        if (chooseComputer == 1) {
            $('#chooseComputer').attr('src', 'Images/stone.svg');
            $('#lastChoose').attr('src', 'Images/stone.svg');
        } else if (chooseComputer == 2) {
            $('#chooseComputer').attr('src', 'Images/sheet.svg');
            $('#lastChoose').attr('src', 'Images/sheet.svg');
        } else if (chooseComputer == 3) {
            $('#chooseComputer').attr('src', 'Images/scissors.svg');
            $('#lastChoose').attr('src', 'Images/scissors.svg');
        } else {
            $('#chooseComputer').attr('src', 'Images/question.svg');
        }
        // En cas de win
        if (chooseUser == 1 && chooseComputer == 3 || chooseUser == 2 && chooseComputer == 1 || chooseUser == 3 && chooseComputer == 2) {
            $('#scoreName').text('Gagne');
            $('#scoreName').css('color', 'green');
            win++;
            $('#numberOfVictory').text(win);
            disabledFormTrue();
        } else if (chooseUser == chooseComputer) { // En cas égalite
            $('#scoreName').text('Egalité')
            $('#scoreName').css('color', 'black');
            draw++;
            $('#numberOfDraw').text(draw);
            disabledFormTrue();
        } else { // En cas de défaite
            $('#scoreName').text('Perdu');
            $('#scoreName').css('color', 'red');
            lost++;
            $('#numberOfDefeat').text(lost);
            disabledFormTrue();
        }
        // Savoir le nombre de game
        game = win + lost + draw;
        $('#numberOfGame').text(game);
        // Calcul du pourcentage pour le ratio victoire défaite
        rate = 100 * win / game;
        // Arrondit le pourcentage a l'entier
        rate = Math.round(rate);
        $('#rate').text(rate + '%');
    });
});