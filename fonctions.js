// Fonctions utilisées dans le site web
function retournerMessageScore(score, nombreQuestions) {
    let message = 'Votre score est de ' + score + ' sur ' + nombreQuestions
    return message
}

function afficherResultat(resultat, nombreListeMots) {
    console.log("Votre nombre total de points est " + resultat + " points et le nombre de mots à écrire était " + nombreListeMots)
}

function choisirPhrasesOuMots() {
    let reponse = ""
    while (reponse !== "mots" && reponse !== "phrases") {
        reponse = prompt("Voulez-vous jouer avec des mots ou des phrases ?")
    }
    return reponse
}