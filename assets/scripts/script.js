// ====================================================
// =  Déclaration des variables globales              =
// ====================================================

var grosBiscuit = document.getElementById("biscuit");
var texteBiscuit = document.getElementById("texte-biscuits");
var boutonClic = document.getElementById("bouton-clic");
var boutonCurseur = document.getElementById("bouton-curseur");
var nombreClic = document.getElementById("nombreClic");
var nombreCurseur = document.getElementById("nombreCurseurs");
var prixCurseur = document.getElementById("prixCurseurs");
var prixClic = document.getElementById("prixClic");
var boutonSauve = document.getElementById("bouton-sauvegarde");
var parSeconde = document.getElementById("par-seconde");
var parClic = document.getElementById("par-clic");

var biscuits = 0;
var increment = 1;
var curseurs = 0;
var incrementUP = 0;

var biscuitsAuto = setInterval(ajouterBiscuitAuto, 1000);

// ====================================================
// =  Déclaration des événements                      =
// ====================================================

grosBiscuit.addEventListener('click', ajouterBiscuit);
boutonClic.addEventListener('click', ameliorerClic);
boutonCurseur.addEventListener('click', ajouterCurseur);
boutonSauve.addEventListener('click', sauvegarder);

// ====================================================
// =  Code qui sera exécuté au chargement de la page  =
// ====================================================

biscuits = parseInt(localStorage.getItem("biscuits"));
incrementUP = parseInt(localStorage.getItem("incrementUP"));
curseurs = parseInt(localStorage.getItem("curseurs"));

refresh();

// ====================================================
// =  Déclaration des fonctions                       =
// ====================================================

function ajouterBiscuit(){
    biscuits += increment + incrementUP;
    refresh();
}

function ajouterBiscuitAuto(){
    if(curseurs != 0){
        biscuits += curseurs;
        //console.log(biscuits);
        refresh();
    }
    refresh();
}

function ameliorerClic(){
    if(biscuits >= calculPrixClic()){
        biscuits -= calculPrixClic();
        refresh();
        incrementUP++;
        refresh();
    }
}

function ajouterCurseur(){
    if(biscuits >= calculPrixCurseur()){
        biscuits -= calculPrixCurseur();
        refresh();
        curseurs++;
        refresh();
    }
}

function calculPrixCurseur(){
    const base = 50;
    const alpha = 0.25;
    const beta = 1.05;
    const prix = base * Math.pow(1 + alpha, Math.pow(curseurs, beta));
    return Math.round(prix);
}
function calculPrixClic(){
    const base = 200;
    const alpha = 0.25;
    const beta = 1.05;
    const prix = base * Math.pow(1 + alpha, Math.pow(incrementUP, beta));
    return Math.round(prix);
}

function verifierPrix(){
    if(biscuits >= calculPrixClic()){
        boutonClic.style.backgroundColor = "#fb5";
    } else{
        boutonClic.style.backgroundColor = "#ccc";
    }
    if(biscuits >= calculPrixCurseur()){
        boutonCurseur.style.backgroundColor = "#fb5";
    } else{
        boutonCurseur.style.backgroundColor = "#ccc";
    }
}

function sauvegarder(){
    localStorage.setItem("biscuits", biscuits);
    localStorage.setItem("incrementUP", incrementUP);
    localStorage.setItem("curseurs", curseurs);
}

function refresh(){
    prixClic.innerText = calculPrixClic() + " biscuit(s)";
    prixCurseur.innerText = calculPrixCurseur() + " biscuit(s)";
    nombreClic.innerText = incrementUP;
    nombreCurseur.innerText = curseurs;
    texteBiscuit.innerText = biscuits + " biscuits";
    parClic.innerText = increment + incrementUP + " par clic";
    parSeconde.innerText = curseurs + " par seconde";
    verifierPrix();
}