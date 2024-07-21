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

function lancerBoucleDeJeu(liste, nombreQuestions) {
    let score = 0
    for (let mot of liste) {
        let motUtilisateur = prompt("Entrez le mot : " + mot)
        if (motUtilisateur === mot) {
            console.log("Le mot entré est correct.")
            score += 1
        } else {
            console.log("Le mot entré est incorrect.")
        }
        nombreQuestions += 1
        console.log(retournerMessageScore(score, nombreQuestions))
    }
    return score
}