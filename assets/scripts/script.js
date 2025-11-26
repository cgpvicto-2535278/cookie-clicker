// ====================================================
// =  Déclaration des variables globales              =
// ====================================================

var grosBiscuit = document.getElementById("biscuit");
var texteBiscuit = document.getElementById("texte-biscuits");

var biscuits;

// ====================================================
// =  Déclaration des événements                      =
// ====================================================

grosBiscuit.addEventListener('click', ajouterBiscuit);

// ====================================================
// =  Code qui sera exécuté au chargement de la page  =
// ====================================================



// ====================================================
// =  Déclaration des fonctions                       =
// ====================================================

function ajouterBiscuit(){
    biscuits++
    console.log(biscuits);
    texteBiscuit.innerHTML = biscuits + " biscuits";
}