$(document).ready(function () {
    // Lors du clique sur btn Add
    $('#btnAdd').click(function () {
        // Ajout 10px a la hauteur du rectangle
        $('#rectangle').height('+=10');
        // Recuperer la hauteur du rectangle
        var height = $('#rectangle').height();
        // Si hauteur est supérieur a 100
        if (height > 100) {
            // On met la hauteur du rectangle a 10
            $('#rectangle').height('10');
        }
    });
    $('#btnGreen').click(function () {
        // Ajout de la couleur green au rectangle
        $('#rectangle').css('background-color', 'green');
    });
    $('#btnInit').click(function () {
        // Remet couleur originale
        $('#rectangle').css('background-color', 'darkgoldenrod');
    });
    $('#btnHide').click(function () {
        // Cacher le rectangle
        $('#rectangle').hide();
    });
    $('#btnShow').click(function () {
        // Afficher le rectangle
        $('#rectangle').show();
    });
});