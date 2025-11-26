// ====================================================
// =  Déclaration des variables globales              =
// ====================================================

var grosBiscuit = document.getElementById("biscuit");
var texteBiscuit = document.getElementById("texte-biscuits");
var boutonClic = document.getElementById("bouton-clic")

var biscuits = 0;
var increment = 1;

// ====================================================
// =  Déclaration des événements                      =
// ====================================================

grosBiscuit.addEventListener('click', ajouterBiscuit);
boutonClic.addEventListener('click', ameliorerClic)

// ====================================================
// =  Code qui sera exécuté au chargement de la page  =
// ====================================================



// ====================================================
// =  Déclaration des fonctions                       =
// ====================================================

function ajouterBiscuit(){
    biscuits += increment;
    console.log(biscuits);
    texteBiscuit.innerHTML = biscuits + " biscuits";
}

function ameliorerClic(){
    increment++;
}