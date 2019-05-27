$(document).ready(function () {
    var score = 0;
    // Lors du clique sur le button avec id btnIncrement
    $('#btnIncrement').click(function () {
        // Incrémenter la variable score de +1
        score++;
        // Afficher dans la balise span la variable score
        $('span').text(score);
    });
    $('#btnDecrement').click(function () {
        // Décrémenter la variable score de -1
        score--;
        // Afficher dans la balise span la variable score
        $('span').text(score);
    })
});