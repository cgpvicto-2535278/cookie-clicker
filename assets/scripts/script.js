// ====================================================
// =  Déclaration des variables globales              =
// ====================================================

var grosBiscuit = document.getElementById("biscuit");
var texteBiscuit = document.getElementById("texte-biscuits");
var boutonClic = document.getElementById("bouton-clic");
var boutonCurseur = document.getElementById("bouton-curseur");
var nombreClic = document.getElementById("nombreClic").innerText;
var nombreCurseur = document.getElementById("nombreCurseurs").innerText;
var prixCurseur = document.getElementById("prixCurseurs").innerText;
var prixClic = document.getElementById("prixClic").innerText;

var biscuits = 0;
var increment = 1;
var curseurs = 0;

var biscuitsAuto = setInterval(ajouterBiscuitAuto, 1000/curseurs);

// ====================================================
// =  Déclaration des événements                      =
// ====================================================

grosBiscuit.addEventListener('click', ajouterBiscuit);
boutonClic.addEventListener('click', ameliorerClic);
boutonCurseur.addEventListener('click', ajouterCurseur);

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
    verifierPrix();
}

function ajouterBiscuitAuto(){
    if(curseurs != 0){
        biscuits += increment;
        //console.log(biscuits);
        texteBiscuit.innerHTML = biscuits + " biscuits";
    }
    verifierPrix();
}

function ameliorerClic(){
    if(biscuits >= calculPrixClic()){
        biscuits -= calculPrixClic();
        increment++;
        verifierPrix();
        prixClic = calculPrixClic() + " biscuit(s)";
        nombreClic = increment;
    }
}

function ajouterCurseur(){
    if(biscuits >= calculPrixCurseur()){
        biscuits -= calculPrixCurseur();
        curseurs++;
        clearInterval(biscuitsAuto);
        biscuitsAuto = setInterval(ajouterBiscuitAuto, 1000/curseurs);
        verifierPrix();
        prixCurseur = calculPrixCurseur() + " biscuit(s)";
        nombreCurseur = curseurs;
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
    const prix = base * Math.pow(1 + alpha, Math.pow(increment, beta));
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