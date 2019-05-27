window.onload = function () {
    document.getElementById("langages").style.display = "none";
    document.getElementById("framework").style.display = "none";
    document.getElementById("outils").style.display = "none";
    document.getElementById("other").style.display = "none";
};
function afficher_cacher(id) {
    console.log("test");
    if (document.getElementById(id).style.display == "none") {
        console.log("if");
        document.getElementById(id).style.display = "block";
    }
    else {
        console.log("else");
        document.getElementById(id).style.display = "none";
    }
};