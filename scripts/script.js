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
 * Cette fonction détermine quel mot afficher en fonction du bouton coché
 */
function affichageSaisie(compteurMots) {
    let boutonSaisie = document.querySelectorAll(".optionSource input")

    for (let i = 0; i < boutonSaisie.length; i++){
        if (boutonSaisie[i].checked) {
            if (i === 0 && compteurMots < 3) {
                afficherProposition(listeMots[compteurMots])
            } else if (i === 1 && compteurMots < 3) {
                afficherProposition(listePhrases[compteurMots])
            } else {
                afficherProposition("Le jeu est terminé")
            }
        }
    }
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
    let zoneProposition = document.querySelector(".zoneProposition")


    afficherProposition(listeMots[compteurMots])

    btnValiderMot.addEventListener("click", () => {
        console.log(inputEcriture.value)
        console.log(zoneProposition.textContent)
        nbMotsProposes += 1
        if (zoneProposition.textContent === inputEcriture.value && nbMotsProposes <= 3) {
            score += 1
            afficherResultat(score, nbMotsProposes)
        } else if (nbMotsProposes <= 3) {
            afficherResultat(score, nbMotsProposes)
        }

        compteurMots += 1

        affichageSaisie(compteurMots)

        inputEcriture.value = ""
    });


    


    afficherResultat(score, nbMotsProposes)
}