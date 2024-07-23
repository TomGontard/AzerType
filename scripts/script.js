/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    let spanScore = document.querySelector(".zoneScore span")
    spanScore.textContent = `${score} / ${nbMotsProposes}`
}

/**
 * Cette fonction affiche dans l'encadré prévu à cet effet le mot à écrire
 */
function afficherProposition(mot) { 
    let zoneProposition = document.querySelector(".zoneProposition")
    console.log(zoneProposition)
    zoneProposition.textContent = mot
}

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
    // Initialisations
    let score = 0
    let nbMotsProposes = 0
    let compteurMots = 0
    let inputEcriture = document.getElementById("inputEcriture")
    let btnValiderMot = document.getElementById("btnValiderMot")

    afficherProposition(listeMots[compteurMots])

    btnValiderMot.addEventListener("click", () => {
        console.log(inputEcriture.value)
        console.log(listeMots[compteurMots])
        compteurMots += 1
        if (listeMots[compteurMots] === undefined) { 
            afficherProposition("Le jeu est fini")
            btnValiderMot.disabled = true
        } else {
            afficherProposition(listeMots[compteurMots])
        }
        inputEcriture.value = ""
    });


    


    afficherResultat(score, nbMotsProposes)
}