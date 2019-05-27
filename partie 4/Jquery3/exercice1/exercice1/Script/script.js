$(document).ready(function () {
    var increment = 0;
    // Lors du clique sur le button avec id btnIncrement
    $('#btnIncrement').click(function () {
        // Incrémenter la variable increment de +1
        increment++;
        // Afficher dans la balise span la variable increment
        $('span').text(increment);
    });
});